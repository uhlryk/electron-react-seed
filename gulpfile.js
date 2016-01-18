var gulp = require('gulp');
var shell = require('gulp-shell')
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var runSequence = require('run-sequence');
var path = require("path");
var preprocess = require('gulp-preprocess');



var webpackOptionsLoader = {
  test: /.jsx?$/,
  loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
  include: path.join(__dirname, 'src/app')
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
    path: path.join(__dirname, './dist/static/'),
    filename: 'bundle.js'
  },
};

gulp.task('copy-electron', function() {
  return gulp.src(['./src/main.js', './src/index.html'])
    .pipe(preprocess({context: { BUNDLE_PATH: './static/bundle.js'}}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-electron-hot', function() {
  return gulp.src(['./src/main.js', './src/index.html'])
    .pipe(preprocess({context: { BUNDLE_PATH: 'http://localhost:3000/static/bundle.js'}}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('compile-react', function(done) {
  webpack(webpackOptions, function(err, stats) {
    if(err) console.log(err);
    done();
  });
});

gulp.task('compile-react-hot', function(done) {
  webpackOptions.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ].concat(webpackOptions.entry);
  webpackOptions.plugins = [
    new webpack.HotModuleReplacementPlugin({})
  ];
  webpackOptionsLoader.loaders.unshift('react-hot');
  webpackOptions.output.publicPath = '/static/';

  new WebpackDevServer(webpack(webpackOptions), {
    hot: true,
    publicPath: webpackOptions.output.publicPath
  }).listen(3000, "localhost", function(err) {
    if(err) console.log(err);
    done();
    console.log('webpack dev server listening at localhost:3000');
  });
});

gulp.task('prebuild-electron', shell.task('./node_modules/.bin/electron ./dist/main'));

gulp.task('prebuild', function(done) {
  runSequence('copy-electron', 'compile-react', 'prebuild-electron', done);
});

gulp.task('prebuild-hot', function(done) {
  runSequence('copy-electron-hot', 'compile-react-hot', 'prebuild-electron', done);
});

