var gulp = require('gulp')
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var normalize = require('postcss-normalize')

gulp.task('css', () => gulp.src('./*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([normalize, autoprefixer({ browsers: ['last 2 versions'] })]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./build'))
)

gulp.task('watch', () => {
  gulp.watch('*.css', ['css'])
})
