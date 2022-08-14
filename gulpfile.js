// gulp
import gulp from 'gulp';

// node
import { paths } from './gulp/config/paths.js';

// tasks
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { devServer } from './gulp/tasks/dev-server.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';

function watcher() {
	gulp.watch(paths.watch.assets, copy);
	gulp.watch(paths.watch.html, html);
	gulp.watch(paths.watch.styles, styles);
	gulp.watch(paths.watch.scripts, scripts);
}

const mainTasks = gulp.parallel(copy, html, styles, scripts);

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, devServer));
const prod = gulp.series(clean, mainTasks);

gulp.task('default', process.env.MODE === 'production' ? prod : dev);
