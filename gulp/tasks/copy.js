// gulp
import { app } from '../app.js';

export const copy = () => {
	return app.gulp.src(app.paths.src.assets)
		.pipe(app.gulp.dest(app.paths.build.assets))
}
