(function(){
  'use strict';


  module.exports = function (grunt) {

  require('jit-grunt')(grunt);

    grunt.initConfig({
      wiredep: {
        task: {
          // Point to the files that should be updated when
          // you run `grunt wiredep`
          src: [
            'app/index.html'
          ],
          ignorePath:  /\.\.\//
        }
      },
      bowercopy: {
        options: {
          srcPrefix: 'bower_components'
        },
        scripts: {
          options: {
            destPrefix: 'public/js/lib'
          },
          files: {
            'angular.js' : 'angular/angular.js',
            'angular-ui-router.js' : 'angular-ui-router/release/angular-ui-router.js'
          }
        }
      },
      sass: {
        dist: {
          files: {
            'public/css/style.css': 'scss/style.scss'
          }
        }
    },
    jshint: {
      options: {
          reporter: require('jshint-stylish'),
          jshintrc : '.jshintrc'
      },
      all: {
        src: [
          'Gruntfile.js',
          'app/js/{,*/}*.js'
        ]
      }
    },
      watch: {
        project: {
          files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json','public/**/*.css', './scss/*.scss'],
          tasks: ["sass"],
          options: {
            livereload: true
          },

        },
      },
      connect: {
        server: {
          options: {
            port: 9000,
            base: 'public/',
            open: true,
            hostname: 'localhost',
            livereload: 35729
          }
        }
      }
    });

    grunt.registerTask('default', ['wiredep', 'bowercopy' ,'connect', 'sass', 'jshint','watch']);

  };
})();
