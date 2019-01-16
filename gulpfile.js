/**
 * Dependencies
 */
var gulp = require('gulp');
	sass = require('gulp-sass');

// SASS - compile sass easily
gulp.task('sass',function () {
  	return gulp
	  	.src('scss/*.scss')
	  	.pipe(sass())
	  	.pipe(gulp.dest('css/'));
});

/**
 * Watchs
 */
gulp.task('watch:sass', function() {
	return gulp
		.watch('scss/**/*.scss', gulp.series('sass'));
});
