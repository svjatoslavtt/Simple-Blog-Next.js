export type Comment = {
	id: string;
	postId: number;
	body: string;
};

export type Post = {
	id: number;
	title: string;
	body: string;
	comments: Comment[];
};
