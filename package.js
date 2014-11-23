Package.describe({
  name: 'shilman:karma-phantomjs-launcher',
  summary: 'karma-phantomjs-launcher plugin packaged for Meteor',
  version: '0.1.4_1',
  git: 'https://github.com/shilman/meteor-karma-phantomjs-launcher.git'
})

Npm.depends({
  'karma-phantomjs-launcher': '0.1.4'
})

Package.onUse(function(api) {
  api.versionsFrom('1.0')
  api.use('sanjo:karma@0.12.24', 'server')
  api.addFiles('main.js', 'server')
})
