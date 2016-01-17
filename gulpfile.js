var gulp = require('gulp');
var shell = require('gulp-shell')
var webpack = require('webpack-stream');

gulp.task('copy-electron', function() {
  return gulp.src(['./src/main.js', './src/index.html'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('compile', function() {
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
        filename: 'app.js',
      },
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('run-electron-prebuild', shell.task('./node_modules/.bin/electron ./dist/main'));