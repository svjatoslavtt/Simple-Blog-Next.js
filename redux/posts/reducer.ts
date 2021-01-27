import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { ActionType } from 'typesafe-actions';

import { ActionTypes, ActionTypeUnion } from './actions';

import { Comment, Post } from '../../types/post.types';

export type PostsState = {
	posts: Post[];
	currentPost: Post;
	comments: Comment[];
};

const postsInitialState: PostsState = {
	posts: null,
	currentPost: null,
	comments: null,
};

export const postsReducer = (
	state = postsInitialState,
	action: ActionType<ActionTypeUnion | AnyAction>
) => {
	switch (action.type) {
		case HYDRATE:
			return {
				...state,
				...action.payload,
			};
		case ActionTypes.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
			};
		case ActionTypes.GET_CURRENT_POST_SUCCESS:
			const { comments, ...rest } = action.payload;

			return {
				...state,
				currentPost: rest,
				comments,
			};
		case ActionTypes.ADD_COMMENT_SUCCESS:
			return {
				...state,
				comments: [...state.comments, action.payload],
			};
		case ActionTypes.ADD_NEW_BLOG_SUCCESS:
			return {
				...state,
				posts: [...state.posts, action.payload],
			};
		case ActionTypes.UPDATE_POST_SUCCESS:
			return {
				...state,
				currentPost: action.payload,
			};
		default:
			return state;
	}
};
