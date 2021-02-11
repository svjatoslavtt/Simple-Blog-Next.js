import axios from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';

import { Actions, ActionTypes } from './actions';

import { ApiEndPoints } from '../../routes/api-routes';
import { AppRoutes } from '../../routes/app-routes';

function* getPosts() {
  try {
    const response: any = yield call(
      axios.get,
      process.env.REACT_APP_API + ApiEndPoints.POSTS
    );
    yield put(Actions.getPostsSuccess(response.data));
  } catch (err) {
    yield put(Actions.getPostFailed(err));
  }
}

function* getCurrentPost(action: any) {
  try {
    const response: any = yield call(
      axios.get,
      'https://simple-blog-api.crew.red' +
        ApiEndPoints.POSTS +
        '/' +
        action.payload.postId +
        '?_embed=comments'
    );
    yield put(Actions.getCurrentPostSuccess(response.data));
  } catch (err) {
    yield put(Actions.getCurrentPostFailed(err));
  }
}

function* addComment(action: any) {
  try {
    const response: any = yield call(
      axios.post,
      'https://simple-blog-api.crew.red' + ApiEndPoints.ADD_COMMENT,
      action.payload
    );
    yield put(Actions.addCommentSuccess(response.data));
  } catch (err) {
    yield put(Actions.addCommentFailed(err));
  }
}

function* addNewBlog(action: any) {
  try {
    const { router, ...rest } = action.payload;

    const response: any = yield call(
      axios.post,
      'https://simple-blog-api.crew.red' + ApiEndPoints.POSTS,
      rest
    );
    yield put(Actions.addNewBlogSuccess(response.data));

    router.push(AppRoutes.POSTS + '/' + response.data.id);
  } catch (err) {
    yield put(Actions.addNewBlogFailed(err));
  }
}

function* updatePost(action: any) {
  try {
    const response: any = yield call(
      axios.put,
      'https://simple-blog-api.crew.red' +
        ApiEndPoints.POSTS +
        '/' +
        action.payload.id,
      action.payload
    );
    yield put(Actions.updatePostSuccess(response.data));
  } catch (err) {
    yield put(Actions.updatePostFailed(err));
  }
}

function* deletePost(action: any) {
  try {
    const { router, postId } = action.payload;

    const response: any = yield call(
      axios.delete,
      'https://simple-blog-api.crew.red' + ApiEndPoints.POSTS + '/' + postId
    );
    yield put(Actions.deletePostSuccess(response.data));

    router.push(AppRoutes.BLOG);
  } catch (err) {
    yield put(Actions.deletePostFailed(err));
  }
}

export function* watchPosts() {
  yield all([
    takeEvery(ActionTypes.GET_POSTS_REQUEST, getPosts),
    takeEvery(ActionTypes.GET_CURRENT_POST_REQUEST, getCurrentPost),
    takeEvery(ActionTypes.ADD_COMMENT_REQUEST, addComment),
    takeEvery(ActionTypes.ADD_NEW_BLOG_REQUEST, addNewBlog),
    takeEvery(ActionTypes.UPDATE_POST_REQUEST, updatePost),
    takeEvery(ActionTypes.DELETE_POST_REQUEST, deletePost),
  ]);
}
