import { NextRouter } from 'next/router';
import { action, ActionType } from 'typesafe-actions';
import { Post } from '../../types/post.types';

export enum ActionTypes {
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
	GET_POSTS_FAILED = 'GET_POSTS_FAILED',
	
	GET_CURRENT_POST_REQUEST = 'GET_CURRENT_POST_REQUEST',
	GET_CURRENT_POST_SUCCESS = 'GET_CURRENT_POST_SUCCESS',
	GET_CURRENT_POST_FAILED = 'GET_CURRENT_POST_FAILED',

	ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST',
	ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS',
	ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED',

	ADD_NEW_BLOG_REQUEST = 'ADD_NEW_BLOG_REQUEST',
	ADD_NEW_BLOG_SUCCESS = 'ADD_NEW_BLOG_SUCCESS',
	ADD_NEW_BLOG_FAILED = 'ADD_NEW_BLOG_FAILED',

	UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST',
	UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS',
	UPDATE_POST_FAILED = 'UPDATE_POST_FAILED',

	DELETE_POST_REQUEST = 'DELETE_POST_REQUEST',
	DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
	DELETE_POST_FAILED = 'DELETE_POST_FAILED',
};

export const Actions = {
  getPostsRequest: () => action(ActionTypes.GET_POSTS_REQUEST),
  getPostsSuccess: (payload: Post[]) => action(ActionTypes.GET_POSTS_SUCCESS, payload),
	getPostFailed: (payload: any) => action(ActionTypes.GET_POSTS_FAILED, payload),
	
	getCurrentPostRequest: (payload: { postId: number }) => action(ActionTypes.GET_CURRENT_POST_REQUEST, payload),
	getCurrentPostSuccess: (payload: Post) => action(ActionTypes.GET_CURRENT_POST_SUCCESS, payload),
	getCurrentPostFailed: (payload: any) => action(ActionTypes.GET_CURRENT_POST_FAILED, payload),

	addCommentRequest: (payload: { postId: number, body: string }) => action(ActionTypes.ADD_COMMENT_REQUEST, payload),
	addCommentSuccess: (payload: Post) => action(ActionTypes.ADD_COMMENT_SUCCESS, payload),
	addCommentFailed: (payload: any) => action(ActionTypes.ADD_COMMENT_FAILED, payload),

	addNewBlogRequest: (payload: { title: string, body: string }) => action(ActionTypes.ADD_NEW_BLOG_REQUEST, payload),
	addNewBlogSuccess: (payload: Post) => action(ActionTypes.ADD_NEW_BLOG_SUCCESS, payload),
	addNewBlogFailed: (payload: any) => action(ActionTypes.ADD_NEW_BLOG_FAILED, payload),

	updatePostRequest: (payload: { id: number, title: string, body: string }) => action(ActionTypes.UPDATE_POST_REQUEST, payload),
	updatePostSuccess: (payload: Post) => action(ActionTypes.UPDATE_POST_SUCCESS, payload),
	updatePostFailed: (payload: any) => action(ActionTypes.UPDATE_POST_FAILED, payload),

	deletePostRequest: (payload: { router: NextRouter, postId: number }) => action(ActionTypes.DELETE_POST_REQUEST, payload),
	deletePostSuccess: (payload: any) => action(ActionTypes.DELETE_POST_SUCCESS, payload),
	deletePostFailed: (payload: any) => action(ActionTypes.DELETE_POST_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
