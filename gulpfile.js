/**
 * Created on 10/19/15.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;

gulp.task('start', function() {
  nodemon({
    script: 'server.js'
  })
});

gulp.task('watch', function() {
  gulp.watch('*.js', ['test']);
});

gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
      .pipe(mocha());
});

gulp.task('bower', function() {
  gulp.src('index.html')
      .pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
      }))
      .pipe(gulp.dest('public/dist/'))
});

gulp.task('default', ['start', 'watch']);