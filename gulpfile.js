var gulp = require('gulp');
var exec = require('child_process').exec

gulp.task('copy', function() {
  gulp.src('./style/**/*').pipe(gulp.dest('./public/style'))
})

gulp.task('webpack', function(cb) {
  exec('webpack', function(err) {
    if (err) { return cb(err) }
    cb()
  })
})

gulp.task('default', ['copy', 'webpack'])
