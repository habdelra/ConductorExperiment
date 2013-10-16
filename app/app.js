import Resolver from 'resolver';
import registerComponents from 'appkit/utils/register_components';
import HelloService from 'appkit/services/hello';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
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
    conductor.services.hello = HelloService;
  }
});

export default App;
