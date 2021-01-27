import { createSelector } from 'reselect';

import { PostsState } from './reducer';

import { Comment, Post } from '../../types/post.types';

const postsState = (state: PostsState) => state;

export const getPosts = createSelector(
	postsState,
	(state: PostsState) =>
		state.posts && state.posts.sort((a: Post, b: Post) => b.id - a.id)
);

export const getCurrentPost = createSelector(
	postsState,
	(state: PostsState) => state.currentPost
);

export const getComments = createSelector(
	postsState,
	(state: PostsState) =>
		state.comments &&
		state.comments.sort((a: Comment, b: Comment) => Number(b.id) - Number(a.id))
);
