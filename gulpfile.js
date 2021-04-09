const { src, dest, task, series,watch,parallel} = require('gulp')
const rm = require( 'gulp-rm' )
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const del = require('del');
const env = process.env.NODE_ENV


task( 'clean', () =>{
  return src( 'dist/**/*', { read: false }).pipe(rm())
})

task('delete', () =>{
  return del(['src/**'], {force:true});
});


task ('copy:html', () =>{
  return src('src/*.html')
  .pipe(dest('dist'))
  .pipe(reload({ stream: true }));
})

task ('copy:content', () =>{
  return src('src/img/**/*')
  .pipe(dest('dist/img'))
  .pipe(reload({ stream: true }));
})
task ('copy:video', () =>{
  return src('src/video//*')
  .pipe(dest('dist/video'))
  .pipe(reload({ stream: true }));
})
task ('copy:fonts', () =>{
  return src('src/Fonts/*')
  .pipe(dest('dist/Fonts'))
  .pipe(reload({ stream: true }));
})


const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/scss/layout/main.scss'
]

task ('styles', () =>{
  return src(styles)
  .pipe(gulpIf(env === 'dev',sourcemaps.init()) )
  .pipe(concat('main.min.scss'))
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulpIf(env === 'dev',
  autoprefixer({
    browsers: ["last 2 versions"],
    cascade: false
  })))
  .pipe(gulpIf(env === 'prod',gcmq()))
  .pipe(gulpIf(env === 'prod',cleanCSS()))
  .pipe(gulpIf(env === 'dev',sourcemaps.write()))
  .pipe(dest('dist'))
  .pipe(reload({ stream: true }));

})

const libs = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/jquery-touchswipe/jquery.touchSwipe.js',
  'node_modules/mobile-detect/mobile-detect.js',
  'src/Js/*.js'
]

task('scripts', () => {
  return src(libs)
    .pipe(gulpIf(env === 'dev',sourcemaps.init()))
    .pipe(concat('main.min.js',{newLine : ';'}))
    .pipe(gulpIf(env === 'prod', babel({
      presets: ['@babel/env']
    })))
    .pipe(gulpIf(env === 'prod',uglify()))
    .pipe(gulpIf( env === 'dev', sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(reload({ stream: true }));

 });

task('server', function() {
  browserSync.init({
      server: {
          baseDir: "dist"
      },
      open:false
  });
});


task('watch', () =>{
  watch('src/scss/**/*.scss', series('styles'));
  watch('src/*.html', series('copy:html'));
  watch('src/*.html', series('copy:content'));
  watch('src/*.html', series('copy:video'));
  watch('src/*.html', series('copy:fonts'));
  watch('src/Js/*.js', series('scripts'));
})

task('default',
series(
  'clean',
parallel('copy:html','copy:content','copy:video','copy:fonts','styles','scripts'),
parallel('watch','server')))

task('build',
series(
  'clean',
parallel('copy:html','copy:content','copy:video','copy:fonts','styles','scripts'),'delete'))
