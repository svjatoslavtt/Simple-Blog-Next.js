import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Comment as CommentTypes } from '../../types/post.types';
import { PostTypes } from '../../components/Post';
import { Actions } from '../../redux/posts/actions';
import { getComments, getCurrentPost } from '../../redux/posts/selectors';
import CommentForm from '../../components/CommentForm';
import ChangePost from '../../components/ChangePost';

const Container = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 24px;
`;

const Body = styled.div`
  fonst-size: 16px;
`;

const PostId = styled.div`
  font-size: 20px;
`;

const CommentWrapper = styled.section`
  width: 100%;
`;

const Comment = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const CommentId = styled.div`
  font-size: 16px;
`;

const CommentBody = styled.div`
  font-size: 15px;
`;

const Button = styled.button`
  height: 40px;
  margin-right: 5px;
  padding: 0 30px;
  background-color: #454545;
  color: #f7f7f7;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #5a5a5a;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

const ActionButtons = styled.div`
  display: flex;
`;

const Post: React.FC<PostTypes> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isShowCommentForm, setIsShowCommentForm] = useState<boolean>(false);
  const [isChangePost, setIsChangePost] = useState<boolean>(false);

  const post = useSelector(getCurrentPost);
  const comments = useSelector(getComments);

  const currentComments =
    comments &&
    comments.length &&
    comments.filter(
      (item: CommentTypes) => item.postId === Number(router.query.postId)
    );

  useEffect(() => {
    dispatch(
      Actions.getCurrentPostRequest({ postId: Number(router.query.postId) })
    );
  }, []);

  const handleDeletePost = () => {
    dispatch(
      Actions.deletePostRequest({ router, postId: Number(router.query.postId) })
    );
  };

  return (
    <Container>
      <PostWrapper>
        <TitleWrapper>
          <Title>{(post && post.title) ?? 'Title'}</Title>

          <PostId>#{post && post.id}</PostId>
        </TitleWrapper>

        <Body>{(post && post.body) ?? 'Body'}</Body>
      </PostWrapper>

      <ButtonsWrapper>
        <Button onClick={setIsShowCommentForm.bind(null, !isShowCommentForm)}>
          {!isShowCommentForm ? 'Add comment' : 'Close the form'}
        </Button>

        <ActionButtons>
          <Button onClick={setIsChangePost.bind(null, true)}>Change</Button>
          <Button onClick={handleDeletePost}>Delete</Button>
        </ActionButtons>
      </ButtonsWrapper>

      {isShowCommentForm && (
        <CommentForm setIsShowCommentForm={setIsShowCommentForm} />
      )}

      {currentComments && currentComments.length ? (
        <CommentWrapper>
          {currentComments.map((item: CommentTypes) => (
            <Comment key={item.id}>
              <CommentId>Comment #{item.id}</CommentId>
              <CommentBody>{item.body}</CommentBody>
            </Comment>
          ))}
        </CommentWrapper>
      ) : null}

      {isChangePost && <ChangePost setIsChangePost={setIsChangePost} />}
    </Container>
  );
};

export default Post;
