import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Actions } from '../../redux/posts/actions';

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	margin-bottom: 50px;
`;

const Textarea = styled.textarea`
	height: 100px;
	width: 100%;
	margin-bottom: 10px;
	padding: 15px;
	border-radius: 5px;
	font-size: 14px;
	border: 1px solid #f7f7f7;
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	border: 1px solid #ccc;
	outline: none;
	box-sizing: border-box;
	resize: none;
`;

const Button = styled.button`
	height: 40px;
	padding: 0 30px;
	background-color: #454545;
	color: #f7f7f7;
	font-size: 15px;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	outline: none;
	transition: all .1s ease-in-out;

	&:hover {
		background-color: #5a5a5a;
	}
`;

type CommentFormTypes = {
	setIsShowCommentForm?: (param: boolean) => void;
};

const CommentForm: React.FC<CommentFormTypes> = ({ setIsShowCommentForm }) => {
	const dispatch = useDispatch();
	const { query } = useRouter();

	const [formData, setFormData] = useState<{ postId: number, body: string }>({
		postId: Number(query.postId),
		body: '',
	});

	const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		dispatch(Actions.addCommentRequest(formData));
		setIsShowCommentForm(false);
	};

	return (
		<FormWrapper onSubmit={handleSubmit}>
			<Textarea 
				placeholder="Your comment..." 
				name="body" 
				required={true} 
				onChange={handleOnChange}
			/>
			<Button>Send</Button>
		</FormWrapper>
	);
};

export default CommentForm;