// node
import path from 'path';

const rootFolder = path.basename(path.resolve());
const buildFolder = './build';
const srcFolder = './src';

export const paths = {
	build: {
		html: `${buildFolder}`,
		styles: `${buildFolder}`,
		scripts: `${buildFolder}`,
		assets: `${buildFolder}/assets/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		styles: `${srcFolder}/index.scss`,
		scripts: `${srcFolder}/index.ts`,
		assets: `${srcFolder}/assets/**/*.*`
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		styles: `${srcFolder}/**/*.scss`,
		scripts: `${srcFolder}/**/*.ts`,
		assets: `${srcFolder}/assets/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}
