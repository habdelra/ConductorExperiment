import Resolver from 'resolver';
import registerComponents from 'appkit/utils/register_components';
import HelloService from 'appkit/services/hello';
import PersonService from 'appkit/services/person';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver.extend({
    resolveService: function(parsedName){


      var classFactory = function (klass) {
        return {
          create: function (injections) {
            if (typeof klass.extend === 'function') {
              return klass.extend(injections);
            } else {
              return klass;
            }
          }
        };
      };

      var prefix = this.namespace.modulePrefix;
      Ember.assert('module prefix must be defined', prefix);

      var pluralizedType = parsedName.type + 's';
      var name = parsedName.fullNameWithoutType;

      var moduleName = prefix + '/' +  pluralizedType + '/' + name;
      var module;

      try {
        module = require(moduleName);

        if (typeof module.create !== 'function') {
          module = classFactory(module);
        }

        if (Ember.ENV.LOG_MODULE_RESOLVER){
          Ember.Logger.info('hit', moduleName);
        }

        return module;
      }  catch (err) {
        console.error('ARGG!'+ err );
      }

      return;
    }
  })
});

App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    registerComponents(container);
  }
});

App.initializer({
  name: 'Service Initializers',
  initialize: function(container, application) {
    var conductor = new Conductor({
      conductorURL: '/vendor/conductor.js.html'
    });
    application.register('conductor:main', conductor,  {instantiate: false});

    conductor.services.hello = container.lookup('service:hello');
    conductor.services.person = container.lookup('service:person');
  }
});

export default App;
