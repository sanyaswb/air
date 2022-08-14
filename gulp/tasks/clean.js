// libs
import { deleteAsync } from 'del';

// gulp
import { app } from '../app.js';

export const clean = () => {
	return deleteAsync(app.paths.clean);
}
