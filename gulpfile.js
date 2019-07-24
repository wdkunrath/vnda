var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var scssFiles = './src/scss/style.scss';
var cssDest = './dist';
var browserSync = require('browser-sync').create();
var sassDevOptions = {outputStyle: 'expanded'}
var sassProdOptions = {outputStyle: 'compressed'}
  
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './',
      },
      port: 8080, 
      startPath: 'index.html', 
    })
});

gulp.task('sassdev', function() {
    return gulp.src(scssFiles)
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.stream());
});
  
gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.stream());
});
  
gulp.task('watch',['browserSync'],function() {
    gulp.watch(scssFiles, ['sassdev', 'sassprod']).on('change', browserSync.reload);
});

gulp.task('default', ['sassdev', 'sassprod', 'watch']);
  