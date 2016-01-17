var gulp = require('gulp');
var shell = require('gulp-shell')
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var runSequence = require('run-sequence');

gulp.task('copy-electron', function() {
  return gulp.src(['./src/main.js', './src/index.html'])
    .pipe(gulp.dest('dist/'));
});

var webpackOptionsLoader = {
  test: /.jsx?$/,
  loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
  exclude: /node_modules/
};
var webpackOptions = {
  module: {
    loaders: [
      webpackOptionsLoader
    ]
  },
  entry: [
    './src/app/index.jsx'
  ],
  output: {
    path: './dist/',
    filename: 'bundle.js',
  },
};

gulp.task('compile-react', function() {
  webpack(webpackOptions);
});

gulp.task('compile-react-watch', function() {
  webpackOptions.entry = [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server'
  ].concat(webpackOptions.entry);
  webpackOptions.plugins = [
    new webpack.HotModuleReplacementPlugin({})
  ];
  webpackOptionsLoader.loaders.unshift('react-hot');

  new WebpackDevServer(webpack(webpackOptions), {
    hot: true
  }).listen(3000, "localhost", function(err) {
    if(err) console.log(err);
    console.log('webpack dev server listening at localhost:3000');
  });
});

gulp.task('prebuild-electron', shell.task('./node_modules/.bin/electron ./dist/main'));

gulp.task('prebuild', function(done) {
  runSequence('copy-electron', 'compile-react', 'prebuild-electron', done);
});

gulp.task('prebuild-watch', function(done) {
  runSequence('copy-electron', 'compile-react-watch', 'prebuild-electron', done);
});

