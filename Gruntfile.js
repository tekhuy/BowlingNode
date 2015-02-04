module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/**/*']
      }
    },
    jasmine_node: {
      all: ['spec/']
    },
    jshint: {
      all: ['Gruntfile.js', 'spec/**/*.js', 'src/**/*.js']
    },
    watch: {
      all: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });
  
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint', 'jasmine_node', 'watch']);
  grunt.registerTask('hint', ['jshint']);
  grunt.registerTask('look', ['watch']);
  grunt.registerTask('mocas', ['mocha_casperjs']);
};