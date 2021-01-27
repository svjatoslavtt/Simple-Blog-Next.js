import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

import { rootSaga } from './saga';
import { postsReducer, PostsState } from './posts/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const makeStore: MakeStore<PostsState> = (context: Context) => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

	(store as any).sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

export const wrapper = createWrapper<PostsState>(makeStore);

export default store;
