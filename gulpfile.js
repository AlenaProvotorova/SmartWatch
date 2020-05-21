const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const concatCss = require("gulp-concat-css");
const rename = require("gulp-rename");
const image = require("gulp-image");

gulp.task("scss", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(concatCss("styles.css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css-libs", function () {
  return gulp.src("src/css/*.css").pipe(gulp.dest("build/css"));
});

gulp.task("video", function () {
  return gulp.src("src/video/*").pipe(gulp.dest("build/video"));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(gulp.dest("build"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("index.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("lib-js", function () {
  return gulp
    .src("src/lib-js/*.js")
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "build/",
    },
  });
});

gulp.task("image", function () {
  gulp.src("src/img/*").pipe(image()).pipe(gulp.dest("build/img"));
});

gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("src/*.html", gulp.parallel("html"));
  gulp.watch("src/js/*.js", gulp.parallel("script"));
});

gulp.task("start", gulp.parallel("scss", "browser-sync", "watch"));

gulp.task(
  "build",
  gulp.parallel([
    "scss",
    "image",
    "html",
    "lib-js",
    "css-libs",
    "script",
    "video",
  ])
);
