const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require("autoprefixer");
const cssnext = require("cssnext");
const minifycss = require("gulp-csso");
const imagemin = require('gulp-imagemin');
const gulpStylelint = require('gulp-stylelint')
gulp.task('css', function () {
    const processors = [autoprefixer,cssnext];
    return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/styles'));
   });
gulp.task('images', function(){
    return gulp.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
      .pipe(imagemin())
      .pipe(gulp.dest('./build/img'))
  });
gulp.task('styleint', function(){
    return gulp.src('./src/css/style.css')
      .pipe(gulpStylelint())
      .pipe(gulp.dest('./build/styleint'))
  });

gulp.task("build", gulp.parallel("css", "images","styleint"));