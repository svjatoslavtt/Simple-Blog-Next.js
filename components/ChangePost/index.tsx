import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FormEvent } from 'react';

import PostForm, { FormDataTypes } from '../PostForm';

import { getCurrentPost } from '../../redux/posts/selectors';
import { Actions } from '../../redux/posts/actions';

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: rgba(0, 0, 0, .3);
	z-index: 3;
`;

const FormWrapper = styled.div`
	width: 100%;
	max-width: 600px;
	padding: 70px 50px 50px;
	background: #fff;
	border-radius: 5px;
`;

type ChangePostTypes = {
	setIsChangePost: (param: boolean) => void;
};

const ChangePost: React.FC<ChangePostTypes> = ({ setIsChangePost }) => {
	const dispatch = useDispatch();
	const currentPost = useSelector(getCurrentPost);

	const handleSubmit = (event: FormEvent, params: FormDataTypes) => {
		const { router, ...rest } = params;

		event.preventDefault();
		dispatch(Actions.updatePostRequest({ ...rest, id: currentPost.id }));
		setIsChangePost(false);
	};
	
	return (
		<Container>
			<FormWrapper>
				<PostForm currentPost={currentPost} handleSubmit={handleSubmit} />
			</FormWrapper>
		</Container>
	);
};

export default ChangePost;