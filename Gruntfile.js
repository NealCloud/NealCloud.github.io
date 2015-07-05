
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
              /*{
                name: '1600w',
                width: 1600,
                suffix: '_2x',
                quality: 60
              },*/
              {
                name: '700w',
                width: 700,                
                quality: 40
              },
              {
                name: '300w',
                width: 150,                
                quality: 40
              }
            ]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    clean: {
      dev: {
        src: ['images'] //clears out images
      },
    },
  
    mkdir: {
      dev: {
        options: {
          create: ['images'] //creates directory
        },
      },
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png,svg}', //copy pictures in fixed file
          dest: 'images/' //destination
        }]
      },
    },

    concat: {
           dist: {
            src: [
               'js/bootstrap.js', //bootstrap js
               'js/jquery-2.1.4.min.js'  // jquery js
                ],
                dest: 'js/build/production.js'
            }
        },

        uglify: {
            build: {
            src: 'js/build/production.js',  //source folder
            dest: 'js/build/production.min.js' //destination
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'concat', 'uglify','responsive_images']);

};
