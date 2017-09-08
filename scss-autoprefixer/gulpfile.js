var gulp = require('gulp'),
    scss = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    sourcemaps = require('gulp-sourcemaps');
    gulpPlumber = require('gulp-plumber');
    notify = require("gulp-notify");  

gulp.task('watch', function () {
    gulp.watch('css/**/*.scss', ['styles']);
});

gulp.task('styles', function () {
    gulp.src('css/**/*.scss')
        .pipe(gulpPlumber())  
    	.pipe(sourcemaps.init())
    	.pipe(autoprefixer({browsers: ['last 2 version', 'safari 7', 'ie 8', 'ie 9', 'ios 6', 'android 4']}))
        .pipe(scss({outputStyle: 'compressed'}))
        .on('error', function(err) {
            notify().write(err);
            this.emit('end');
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'))
        .pipe(notify("success"));
});

gulp.task('default', ['styles', 'watch']);