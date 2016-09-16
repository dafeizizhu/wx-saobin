var gulp = require('gulp')
var path = require('path')
var del = require('del')
var exec = require('child_process').exec

gulp.task('clean', () => del([path.join(__dirname, 'dist', '**', '*')]))

gulp.task('webpack', ['clean'], cb => {
  exec('API_ENV=local webpack -p', (err, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

gulp.task('deploy', ['webpack'], () => {
  gulp.src(['index.html', 'dist/**/*', 'fixture/**/*'], {base: '.'})
    .pipe(gulp.dest(process.env.WX_SAOBIN_DEPLOY_PATH))
})

gulp.task('default', ['deploy'])
