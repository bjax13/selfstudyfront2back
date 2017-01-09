var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    //uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),

    babel = require('gulp-babel');
    //babel-preset-es2015




var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();




gulp.task('build-css', [], function () {
    return gulp.src(['./public/css/reset.css','./public/css/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/dist'));
});


gulp.task('build-js', [], function() {
   return gulp.src(['./public/app.js', './public/js/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('build', [ 'build-css', 'build-js'], function() {
    return gulp.src('./public/index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));

});

gulp.task('watch', function() {
    return gulp.watch(['./public/index.html','./public/app.js','./public/**/*.html', './public/css/**/*.css', './public/js/**/*.js'], ['build']);
});
