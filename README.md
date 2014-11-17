# grunt-pushd-popd

> pushd/popd-style directory changing for Grunt

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pushd-popd --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pushd-popd');
```

## The "pushd" and "popd" tasks

### Overview

These tasks imitate the [pushd/popd behaviour](http://en.wikipedia.org/wiki/Pushd_and_popd) in Bash and other Unix shells.

### Options

No options applicable.

### Usage Examples

```js
grunt.registerTask('build', [
  'clean',
  'concurrent:main',
  'copy:build',
  'pushd:build/source',
  'nodewebkit:build',
  'popd'
]);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2014-11-17   v0.1.0   Initial release