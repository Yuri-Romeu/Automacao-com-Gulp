const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
     return gulp.src('./source/styles/main.scss').pipe(sass()).pipe(gulp.dest('./build/styles/'));
}

function compressaoImagem() {
     return gulp.src('./source/imagens/*').pipe(imagemin()).pipe(gulp.dest('./build/imagens/'));
}

function compressaoJavascript() {
     return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./build/scripts/'));
}

exports.default = function () {
     gulp.watch('./source/styles/main.scss', { ignoreInitial: false }, gulp.series(compilaSass));

     gulp.watch('./source/imagens/*', { ignoreInitial: false }, gulp.series(compressaoImagem));

     gulp.watch(
          './source/scripts/*.js',
          { ignoreInitial: false },
          gulp.series(compressaoJavascript),
     );
};

//npm run gulp
