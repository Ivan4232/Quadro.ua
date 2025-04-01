import gulp from 'gulp';
import image from 'gulp-image';

export function images() {
  return gulp.src('./source/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('./build/images'));
}


export default images;
