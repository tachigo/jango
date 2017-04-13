'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rtlcss = require("gulp-rtlcss");
var rename = require("gulp-rename");

gulp.task('sass', function () {
	gulp.src('./sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./assets/base/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

var prettify = require('gulp-prettify');
 
gulp.task('prettify', function() {
  gulp.src('../../master/release/theme/*.html')
    .pipe(prettify({
    	indent_size: 4, 
    	indent_inner_html: true,
    	unformatted: ['pre', 'code']
   	}))
    .pipe(gulp.dest('../../master/release/theme/'))
});

gulp.task('prettify-rtl', function() {
  gulp.src('../../master/release/theme_rtl/*.html')
    .pipe(prettify({
      indent_size: 4, 
      indent_inner_html: true,
      unformatted: ['pre', 'code']
    }))
    .pipe(gulp.dest('../../master/release/theme_rtl/'))
});

gulp.task('rtlcss', function () {

  gulp
    .src(['./assets/base/css/*.css', '!./assets/base/css/*-rtl.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./assets/base/css/')); 

  gulp
    .src(['./assets/base/css/themes/*.css', '!./assets/base/css/themes/*-rtl.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./assets/base/css/themes/')); 

  /*
  gulp
    .src(['./assets/plugins/revo-slider/css/*.css', '!./assets/plugins/revo-slider/css/*-rtl.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./assets/plugins/revo-slider/css')); 
  */
});