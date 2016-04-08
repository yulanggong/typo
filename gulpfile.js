var gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('typo.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('default',['sass']);