
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

/****** TEMPLATES ******/
// gulp.task('templates', () =>
//   gulp.src([
//     `${pkg.path.app.templates}index.pug`,
//     `${pkg.path.app.templates}**/*.pug`,
//     `!${pkg.path.app.templates}includes/**/*.pug`
//   ])
//     .pipe($.pug())
//     .pipe(gulp.dest(`${pkg.path.dist.templates}sdn_ryu/`))
// );

/****** SERVE & WATCH ******/
gulp.task('serve', () => {
  gulp.watch([`${pkg.path.app.js}**/*.js`], ['scripts']);
  gulp.watch([`${pkg.path.app.scss}**/*.scss`], ['styles']);
  // gulp.watch([`${pkg.path.app.templates}**/*.html`], ['templates']);
});

/****** BUILD ******/
// gulp.task('build', ['scripts', 'styles', 'templates']);
gulp.task('build', ['scripts', 'styles']);

/****** DEFAULT ******/
gulp.task('default', ['build', 'serve']);
