// gulp
import { app } from '../app.js';

export const devServer = (done) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.paths.build.html}`,
			notify: false,
			port: 3000
		}
	});
}