const fs = require("fs");
const gulp = require("gulp");
const rename = require("gulp-rename");

gulp.task("build", [], () => {
  gulp
    .src("src/htaccess.dist")
    .pipe(rename(".htaccess"))
    .pipe(gulp.dest("dist"));
});
