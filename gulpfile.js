var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('copy-electron', function() {
  return gulp.src(['./src/main.js', './src/index.html'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('run-electron-prebuild', shell.task('./node_modules/.bin/electron ./dist/main'));