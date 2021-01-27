import { createSelector } from "reselect";

import { PostsState } from "./reducer";

const postsState = (state: PostsState) => state;

export const getPosts = createSelector(
	postsState,
	(state: PostsState) => state.posts
);

export const getCurrentPost = createSelector(
	postsState,
	(state: PostsState) => state.currentPost
);

export const getComments = createSelector(
	postsState,
	(state: PostsState) => state.comments
);