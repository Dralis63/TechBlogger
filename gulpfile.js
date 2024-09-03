const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series } = require('gulp');

// Tâche pour compiler le SCSS en CSS
function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
}

// Tâche pour regarder les changements dans les fichiers SCSS
function watchSass() {
    gulp.watch('src/scss/**/*.scss', compileSass);
}

exports.default = series(compileSass, watchSass);