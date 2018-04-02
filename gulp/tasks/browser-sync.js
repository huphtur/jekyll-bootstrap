var browserSync = require('browser-sync');
var config      = require('../util/loadConfig').browsersync;
var gulp        = require('gulp');

gulp.task('browser-sync', function() {
  browserSync.init({
    // notify: config.notify,
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
        margin: '0px',
        padding: '5px',
        position: 'fixed',
        fontSize: '10px',
        zIndex: '9999',
        borderRadius: '4px 0 0',
        color: 'white',
        textAlign: 'center',
        display: 'block',
        backgroundColor: 'rgba(60, 197, 31, 0.5)'
      }
    },
    open: config.open,
    port: config.port,
    server: {
      baseDir: config.server.basedir
    },
    xip: config.xip
  });
});
