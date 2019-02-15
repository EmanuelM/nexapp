/**
 * Dependencies
 */
var gulp = require('gulp');
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minify = require('gulp-minify');

/**
 * Build 'dist'
 */
gulp.task('clean', function() {
	return gulp
		.src(['./dist/css/*.css', './dist/js/*.js'], {read: false})
		.pipe(clean());
});

/**
 * Compile
 */
// sass
gulp.task('sass', function() {
  	return gulp
	  	.src('./src/scss/*.scss')
	  	.pipe(sass())
	  	.pipe(gulp.dest('./src/css/'))
	  	.pipe(rename('nexapp.css'))
	  	.pipe(gulp.dest('./dist/css/'));
});

/**
 * Concat
 */
// js -> core
gulp.task('concat:core', function() {
	return gulp
		.src([
				'./src/js/core/router.js',
				'./src/js/core/nexapp.js',
			])
		.pipe(concat('nexapp.js'))
		.pipe(gulp.dest('./dist/js'));
});
// js -> general
gulp.task('concat:app', function() {
	return gulp
		.src([
				'./src/js/*.js',
				'./src/js/routes.js',
			])
		.pipe(concat('nexapp.js'))
		.pipe(gulp.dest('./dist/js'));
})

/**
 * Minify
 */
// css
gulp.task('minify:css', function() {
  	return gulp
	  	.src('./dist/css/nexapp.css')
	    .pipe(csso())
	    .pipe(rename('nexapp.min.css'))
	    .pipe(gulp.dest('./dist/css'));
});
// js
gulp.task('minify:js', function() {
	return gulp
		.src([
			'./dist/js/*.js',
		])
		.pipe(minify({
			ext: {
				min: '.min.js',
			},
		}))
		.pipe(gulp.dest('./dist/js'));
});

// Copy normals js to './dist/'
gulp.task('copy:js', function() {
	return gulp
		.src([
			'./src/js/*.js',
			'./src/js/core/jquery.js',
		])
		.pipe(gulp.dest('./dist/js'));
})

/**
 * Watches
 */
gulp.task('watch:sass', function() {
	return gulp
		.watch('./src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('build', gulp.series('clean', 'sass', 'minify:css', 'concat:core', 'minify:js', 'copy:js'));
