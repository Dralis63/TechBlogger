const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Tâche pour compiler le SCSS en CSS avec autoprefixer
function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('src/css'));
}

// Tâche pour optimiser les images
async function optimizeImages() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Tâche pour regarder les changements dans les fichiers SCSS
function watchSass() {
    gulp.watch('src/scss/**/*.scss', compileSass);
}

// Export des tâches
exports.compileSass = compileSass;
exports.optimizeImages = optimizeImages;
exports.watchSass = watchSass;

// Tâche par défaut
exports.default = gulp.series(compileSass, watchSass, optimizeImages);
