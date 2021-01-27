import Head from 'next/head';
import { NextPage } from 'next';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { PostTypes } from '../components/Post';
import PostPreview from '../components/Post';
import { Actions } from '../redux/posts/actions';
import { getPosts } from '../redux/posts/selectors';
import { wrapper } from '../redux/store';

const Container = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

type BlogTypes = {
  posts: PostTypes[];
};

const Blog: NextPage<BlogTypes> = () => {
  const posts = useSelector(getPosts);

  return (
    <>
      <Head>
        <title>Simple Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {posts &&
          posts.length &&
          posts.map((item: PostTypes) => (
            <PostPreview
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
            />
          ))}
      </Container>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(Actions.getPostsRequest());
  store.dispatch(END);
  await (store as any).sagaTask.toPromise();
});

export default Blog;
