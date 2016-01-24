var gulp = require('gulp');
var gutil = require("gulp-util");
var shell = require('gulp-shell')
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var runSequence = require('run-sequence');
var path = require("path");
var preprocess = require('gulp-preprocess');
var electron = require('gulp-electron');
var packageJson = require('./package.json');
var myip = require('quick-local-ip');

const WEBPACK_NETWORK_IP = myip.getLocalIP4();
const WEBPACK_SERVER_HOST = 'http://' + WEBPACK_NETWORK_IP;
const WEBPACK_SERVER_PORT = 3000;
const STATIC_PATH = 'static';
const BUNDLE_FILE = 'bundle.js';
const APP_NAME = packageJson.name;
const APP_VERSION = packageJson.version;

var webpackOptionsLoader = {
  test: /.jsx?$/,
  loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
  include: path.join(__dirname, 'src/app'),
  exclude: /node_modules/
};
var webpackOptions = {
  module: {
    loaders: [
      webpackOptionsLoader,
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  entry: [
    './src/app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, './dist/' + STATIC_PATH + '/'),
    filename: BUNDLE_FILE
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets/'),
      path.resolve(__dirname, './node_modules/compass-mixins/lib/')
    ]
  },
  eslint: {

  },
  debug: true,
  progress: false,
  emitError: true,
  emitWarning: true,
  failOnError: true,
  stats: {
    colors: true,
    reasons: true
  },
  devtool: 'source-map'
};

gulp.task('copy-electron', function() {
  return gulp.src(['./src/main.js', './src/index.html', './src/package.json'])
    .pipe(preprocess({
      context: {
        BUNDLE_PATH: './' + STATIC_PATH + '/' + BUNDLE_FILE,
        APP_NAME: APP_NAME,
        APP_VERSION: APP_VERSION
      }
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-electron-hot', function() {
  return gulp.src(['./src/main.js', './src/index.html', './src/package.json'])
    .pipe(preprocess({
      context: {
        BUNDLE_PATH: WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT +'/' + STATIC_PATH + '/' + BUNDLE_FILE,
        APP_NAME: APP_NAME,
        APP_VERSION: APP_VERSION
      }
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('compile-react', function(done) {
  webpack(webpackOptions, function(err, stats) {
    if(err) console.log(err);
    gutil.log("[webpack]", stats.toString({}));
    done();
  });
});

gulp.task('compile-react-hot', function(done) {
  webpackOptions.entry = [
    'webpack-dev-server/client?' + WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT,
    'webpack/hot/only-dev-server'
  ].concat(webpackOptions.entry);
  webpackOptions.plugins = [
    new webpack.HotModuleReplacementPlugin({})
  ];
  webpackOptionsLoader.loaders.unshift('react-hot');
  webpackOptions.output.publicPath = WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT + '/' + STATIC_PATH + '/';

  new WebpackDevServer(webpack(webpackOptions), {
    hot: true,
    publicPath: '/' + STATIC_PATH + '/'
  }).listen(WEBPACK_SERVER_PORT, WEBPACK_NETWORK_IP, function(err) {
    if(err) console.log(err);
    done();
    console.log('webpack dev server listening at ' + WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT);
  });
});

gulp.task('prebuild-electron', shell.task('./node_modules/.bin/electron ./dist/main'));

gulp.task('prebuild', function(done) {
  runSequence('copy-electron', 'compile-react', 'prebuild-electron', done);
});

gulp.task('prebuild-hot', function(done) {
  runSequence('copy-electron-hot', 'compile-react-hot', 'prebuild-electron', done);
});

gulp.task('build-electron', function() {
  return gulp.src("")
    .pipe(electron({
      src: './dist',
      packageJson: packageJson,
      release: './release',
      cache: './cache',
      version: packageJson.electronVersion,
      packaging: true,
      platforms: ['darwin-x64'],
      platformResources: {
        darwin: {
          CFBundleDisplayName: APP_NAME,
          CFBundleIdentifier: APP_NAME,
          CFBundleName: APP_NAME,
          CFBundleVersion: APP_VERSION,
          //icon: 'gulp-electron.icns'
        }
      }
    }))
    .pipe(gulp.dest(""));
});

gulp.task('build', function(done) {
  runSequence('copy-electron', 'compile-react', 'build-electron', done);
});
