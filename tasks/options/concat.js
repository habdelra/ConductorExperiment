module.exports = {
  conductor: {
    src: ['tmp/public/vendor/almond.js', 'tmp/public/vendor/conductor/**/*.js'],
    dest: 'tmp/conductor.js',
    options: {
      footer: "self.Oasis = require('oasis'); self.Conductor = require('conductor'); require('conductor/card'); self.oasis = new self.Oasis(); self.oasis.autoInitializeSandbox();"
    }
  }
};