(function() {
  'use strict';

  module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
      wiredep: {
        task: {
          // Point to the files that should be updated when
          // you run `grunt wiredep`
          src: [
            'app/index.js',
          ],
          ignorePath: /\.\.\//,
        },
      },
      copy: {
        main: {
          files: [
            {
              expand: true,
              cwd: 'app/',
              src: '{,*/}*.html',
              dest: 'public/',
            },
            {
              expand: true,
              cwd: 'app/scripts/',
              src: '{,*/}*.js',
              dest: 'public/js',
            },
          ],
        },
      },
      jshint: {
        options: {
            reporter: require('jshint-stylish'),
            jshintrc: '.jshintrc',
        },
        all: {
          src: [
            'Gruntfile.js',
            'app/js/{,*/}*.js',
          ],
        },
      },
      watch: {
        project: {
          files: [
            'app/{,*/}*.js',
            'app/{,*/}*.html',
            '{,*/}*.json',
            'app/{,*/}*.css',

          ],
          tasks: ['copy'],
          options: {
            livereload: true,
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
            livereload: 35729,
          },
        },
      },
    });

    grunt.registerTask('default',
      [
        'copy',
        'connect',
        'jshint',
        'watch',
      ]);
  };
})();
