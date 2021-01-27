import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  ActionButtons,
  Body,
  Button,
  ButtonsWrapper,
  Comment,
  CommentBody,
  CommentId,
  CommentWrapper,
  Container,
  PostId,
  PostWrapper,
  Title,
  TitleWrapper,
} from './styled-components';

import { Comment as CommentTypes } from '../../types/post.types';
import { PostTypes } from '../../components/Post';
import { Actions } from '../../redux/posts/actions';
import { getComments, getCurrentPost } from '../../redux/posts/selectors';
import CommentForm from '../../components/CommentForm';
import ChangePost from '../../components/ChangePost';

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
          <Title>{post && post.title}</Title>

          <PostId>#{post && post.id}</PostId>
        </TitleWrapper>

        <Body>{post && post.body}</Body>
      </PostWrapper>

      <ButtonsWrapper>
        <Button onClick={setIsShowCommentForm.bind(null, true)}>
          Add comment
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
