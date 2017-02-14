var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './src/app.jsx', extensions: ['.jsx'], debug: true})
      .transform('babelify', {presets: ['react', 'es2015', 'stage-0'] , plugins: ['transform-runtime', 'transform-regenerator']})
      .bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['./src/*.jsx', './src/containers/*.jsx'], ['build']);
});

gulp.task('default', ['watch']);