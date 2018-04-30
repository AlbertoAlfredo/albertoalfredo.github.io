var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('sass/main.scss')
		.pipe(sass())
		.on('error', onError)
		.pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
});


gulp.task('default', ['sass','watch']);

function onError(err) {
	console.log(err);
	this.emit('end');
}