/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  if (app.env === 'development') {
    // bootstrap css
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {destDir: 'assets'});
    // bootstrap fonts
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {destDir: 'fonts'});
    // add bootstrap js
    app.import('bower_components/bootstrap/dist/js/bootstrap.js');
    // underscore js
    app.import('bower_components/underscore/underscore.js');
    // font-awesome css
    app.import('bower_components/font-awesome/css/font-awesome.css');
    app.import('bower_components/font-awesome/css/font-awesome.css.map', {destDir: 'assets'});
    // font-awesome fonts
    app.import('bower_components/font-awesome/fonts/FontAwesome.otf', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {destDir: 'fonts'});

  } else {
    // bootstrap css
    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {destDir: 'assets'});
    // bootstrap fonts
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {destDir: 'fonts'});
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {destDir: 'fonts'});
    // add bootstrap js
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    // underscore js
    app.import('bower_components/underscore/underscore-min.js');
    // font-awesome css
    app.import('bower_components/font-awesome/css/font-awesome.css');
    app.import('bower_components/font-awesome/css/font-awesome.css.map', {destDir: 'assets'});
    // font-awesome fonts
    app.import('bower_components/font-awesome/fonts/FontAwesome.otf', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {destDir: 'fonts'});
  }

  return app.toTree();
};
