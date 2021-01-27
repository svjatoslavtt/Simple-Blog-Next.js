import { all } from 'redux-saga/effects';

import { watchPosts } from './posts/sagas';

export function* rootSaga() {
	yield all([
		watchPosts()
	]);
}
