var gulp = require('gulp');

gulp.task('copy-electron', function() {
  return gulp.src(['./src/main.js', './src/index.html'])
    .pipe(gulp.dest('dist/'));
});
