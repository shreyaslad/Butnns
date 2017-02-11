'use strict';

var gulp = require('gulp');
var pkg = require('./package.json');
var minifyCSS = require('gulp-minify-css');
var comment = '\/*\r\n* Wing ' + pkg.version + '\r\n* Copyright 2017, Shreyas Lad\r\n* http:\/\/getbutns.tk\/\r\n* Free to use under the MIT license.\r\n*\\r\n*\/\r\n';
var $ = require('gulp-load-plugins')();

gulp.task('build', function () {
  return gulp.src(['dist/butns.css'])
    .pipe($.concat('butns.css'))
    .pipe($.header(comment + '\n'))
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', ['build'], function() {
  return gulp.src(['./dist/butns.css'])
    .pipe(minifyCSS())
    .pipe($.header(comment))
    .pipe($.size())
    .pipe($.concat('butns.min.css'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', function() {
  gulp.watch(['dist/*.css'], ['default']);
});


gulp.task('default', ['build', 'minify']);
