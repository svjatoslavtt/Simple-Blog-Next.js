import Link from 'next/link';

import {
  Body,
  Container,
  Detail,
  PostId,
  Title,
  TitleWrapper,
} from './styled-components';

import { AppRoutes } from '../../routes/app-routes';

export type PostTypes = {
  id: number;
  title: string;
  body: string;
};

const PostPreview: React.FC<PostTypes> = ({ id, title, body }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>

        <PostId>#{id}</PostId>
      </TitleWrapper>

      <Body>{body.length > 250 ? body.substring(0, 250) + '...' : body}</Body>

      <Link href={`${AppRoutes.POSTS}/${id}`}>
        <Detail>Open</Detail>
      </Link>
    </Container>
  );
};

export default PostPreview;
