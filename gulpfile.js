var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'nested',
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

    gulp.task('watch', ['sass'], function(){
    gulp.watch('sass/**/*.scss', ['sass']);
});
