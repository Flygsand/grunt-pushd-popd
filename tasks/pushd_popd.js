/*
 * grunt-pushd-popd
 * https://github.com/protomouse/grunt-pushd-popd
 *
 * Copyright (c) 2014 protomouse
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var directoryStack = [];

  function chdir(dir) {
    grunt.verbose.write('Changing working directory to ' + dir + '...');
    try {
      grunt.file.setBase(dir);
      grunt.verbose.ok();
    } catch (e) {
      grunt.fail.warn(e);
    }
  }

  grunt.registerTask('pushd', 'Push and then change working directory', function(dir) {
    directoryStack.push(process.cwd());
    chdir(dir);
  });

  grunt.registerTask('popd', 'Restore working directory from stack', function() {
    var dir = directoryStack.pop();

    if (dir) {
      chdir(dir);
    } else {
      grunt.fail.warn('Directory stack empty');
    }
  });

};
