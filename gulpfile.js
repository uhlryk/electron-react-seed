var gulp = require('gulp');
var shell = require('gulp-shell')
var webpack = require('webpack-stream');
var runSequence = require('run-sequence');

gulp.task('copy-electron', function() {
  return gulp.src(['./src/main.js', './src/index.html'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('compile-react', function() {
  return gulp.src('src/app/index.jsx')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'stage-0', 'react'],
              compact: true
            }
          }
        ]
      },
      output: {
        filename: 'bundle.js',
      },
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('prebuild-electron', shell.task('./node_modules/.bin/electron ./dist/main'));

gulp.task('prebuild', function(done) {
  runSequence('copy-electron', 'compile-react', 'prebuild-electron', done);
});


