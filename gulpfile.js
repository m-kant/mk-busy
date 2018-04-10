/* dorado theme */
var gulp		= require('gulp');
var rename		= require('gulp-rename');
var del			= require('del');
var prefix		= require('gulp-autoprefixer');
var sass 		= require('gulp-sass');
var cleanCSS	= require('gulp-clean-css');

gulp.task('clean', function(){ return del(['dist/*']); });

gulp.task('styles', function() {
	return gulp.src(
			'src/mk-busy.scss'
		)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(gulp.dest('dist/'))
		.pipe(cleanCSS())
		.pipe(rename('mk-busy.min.css'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
	//gulp.watch(['src/*.js','src/js/*.js',],gulp.parallel( 'js' ));
	gulp.watch(['src/*.scss'],gulp.parallel( 'styles' ));
});

//gulp.task('build', gulp.parallel( 'js','styles' ));
gulp.task('build', gulp.parallel( 'styles' ));
gulp.task('clean_build', gulp.series('clean','build'));
gulp.task('default', gulp.series('clean_build'));