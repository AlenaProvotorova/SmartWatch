const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  concatCss = require("gulp-concat-css"),
  rename = require("gulp-rename");

gulp.task("scss", function () {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(concatCss("styles.css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("html", function () {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function () {
  return gulp.src("app/js/*.js").pipe(browserSync.reload({ stream: true }));
});

gulp.task("lib-js", function () {
  return gulp
    .src([])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
});

gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  gulp.watch("app/js/*.js", gulp.parallel("script"));
});

gulp.task("start", gulp.parallel("scss", "browser-sync", "watch"));
