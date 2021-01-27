import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import PostForm from '../../../components/PostForm';
import { Actions } from '../../../redux/posts/actions';
import { FormDataTypes } from '../../../components/PostForm';

const AddPost: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent, params: FormDataTypes) => {
    event.preventDefault();
    dispatch(Actions.addNewBlogRequest(params));
  };

  return <PostForm handleSubmit={handleSubmit} />;
};

export default AddPost;
