var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('htmlcombine', function () {
    return gulp.src('./src/*.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['htmlcombine']);