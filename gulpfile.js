'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var precss = require('precss');
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('style', function() {
  gulp.src('postcss/style.css')
    .pipe(plumber())
    .pipe(postcss([
      precss(),
      autoprefixer({browsers: [
        'last 2 versions'
      ]})
    ]))
    .pipe(gulp.dest('css'))
    .pipe(server.stream());
});

gulp.task('symbols', function() {
  return gulp.src('img/icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('svg', function() {
  return gulp.src('img/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('img'));
});

gulp.task('js', function() {
  gulp.src('node_modules/picturefill/dist/picturefill.min.js')
    .pipe(gulp.dest('build/js'))
  gulp.src('node_modules/svg4everybody/dist/svg4everybody.min.js')
    .pipe(gulp.dest('build/js'));
});

gulp.task('serve', ['style'], function() {
  server.init({
    server: '.',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('postcss/**/*.css', ['style']);
  gulp.watch('*.html').on('change', server.reload);
});

gulp.task('build', ['style', 'js', 'symbols']);
