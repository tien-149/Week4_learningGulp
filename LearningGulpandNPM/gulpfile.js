const gulp=require('gulp');
const sass=require('gulp-sass');
const postcss=require('gulp-postcss');
const nano=require('cssnano');
const prefixer=require('autoprefixer');

const imagemin=require('gulp-imagemin');

//define some common task for Gukp to run

//Like comppile and minify SASS files

function compile(done) {
    gulp.src("./sass/**/*.scss")
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([prefixer(), nano()]))
        .pipe(gulp.dest("./css"))
        done()
}

function squashImages(done) {
    gulp.src('./images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
        done()
}
exports.compile = compile;
exports.squash = squashImages;