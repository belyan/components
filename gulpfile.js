var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('./common/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./common/styles/'));
});

gulp.task('watch', function() {
    gulp.watch('./**/*.less', ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'less']);