//libs
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-cleancss';
import groupMediaQueries from 'gulp-group-css-media-queries';

// gulp
import { app } from '../app.js'

export const styles = () => {
	const sass = gulpSass(dartSass);

	return app.gulp.src(app.paths.src.styles, { sourcemaps: true })
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(app.plugins.if(app.isProd, groupMediaQueries()))
		.pipe(app.plugins.if(app.isProd, autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 versions"],
			cascade: true
		})))
		.pipe(app.plugins.if(app.isProd, cleanCss()))
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(app.plugins.replace('url(../', 'url(./'))
		.pipe(app.gulp.dest(app.paths.build.styles))
		.pipe(app.plugins.browserSync.stream());
}