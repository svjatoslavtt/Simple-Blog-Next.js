import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import styled from 'styled-components';

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
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
  max-width: 600px;
  padding: 70px 50px 50px;
  background: #fff;
  border-radius: 5px;
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
  background-color: #f7f7f7;
  color: #333333;
  font-size: 15px;
  border-radius: 50%;
  border: 1px solid #333333;
  cursor: pointer;
  outline: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #f7f7f7;
    background-color: #f56060;
    border: 1px solid #f56060;
  }
`;

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
