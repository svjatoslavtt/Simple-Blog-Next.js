import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';

import { Button, Container, FormWrapper } from './styled-components';

import PostForm, { FormDataTypes } from '../PostForm';

import { getCurrentPost } from '../../redux/posts/selectors';
import { Actions } from '../../redux/posts/actions';

type ChangePostTypes = {
  setIsChangePost: (param: boolean) => void;
};

const ChangePost: React.FC<ChangePostTypes> = ({ setIsChangePost }) => {
  const dispatch = useDispatch();
  const currentPost = useSelector(getCurrentPost);

  const handleSubmit = (event: FormEvent, params: FormDataTypes) => {
    event.preventDefault();

    const { router, ...rest } = params;

    const currentPostData = {
      title: currentPost.title,
      body: currentPost.body,
    };

    const isFieldsMatch = Object.keys(currentPostData).some(
      (item: string) => currentPostData[item] !== rest[item]
    );

    if (isFieldsMatch) {
      dispatch(Actions.updatePostRequest({ ...rest, id: currentPost.id }));
    }

    setIsChangePost(false);
  };

  return (
    <Container>
      <FormWrapper>
        <Button onClick={setIsChangePost.bind(null, false)}>X</Button>
        <PostForm currentPost={currentPost} handleSubmit={handleSubmit} />
      </FormWrapper>
    </Container>
  );
};

export default ChangePost;
