// gulp
import gulp from 'gulp';

// configs
import { paths } from './config/paths.js';

// plugins
import { plugins } from './config/plugins.js';

const isProd = process.env.mode === 'production';
const isDev = process.env.mode === 'development';

export const app = {
	isProd: isProd,
	isDev: isDev,
	paths: paths,
	plugins: plugins,
	gulp: gulp
}
