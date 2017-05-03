
const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies']
});

/****** SCRIPTS ******/
gulp.task('scripts', () =>
  gulp.src([
    `${pkg.path.app.js}plugins/**/*.js`,
    `${pkg.path.app.js}global.js`,
    `${pkg.path.app.js}**/*.js`
  ])
    .pipe($.concat('main.js'))
    .pipe(gulp.dest(`${pkg.path.dist.js}`))
);

/****** STYLES ******/
gulp.task('styles', () =>
  gulp.src([
    `${pkg.path.app.scss}main.scss`
  ])
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest(`${pkg.path.dist.css}`))
);

/****** FONTS ******/
gulp.task('fonts', () =>
  gulp.src([
    `${pkg.path.app.fonts}**/*`
  ])
    .pipe(gulp.dest(`${pkg.path.dist.fonts}`))
);

/****** SERVE & WATCH ******/
gulp.task('serve', () => {
  gulp.watch([`${pkg.path.app.js}**/*.js`], ['scripts']);
  gulp.watch([`${pkg.path.app.scss}**/*.scss`], ['styles']);
  gulp.watch([`${pkg.path.app.fonts}**/*`], ['fonts']);
});

/****** BUILD ******/
gulp.task('build', ['scripts', 'styles', 'fonts']);

/****** DEFAULT ******/
gulp.task('default', ['build', 'serve']);
