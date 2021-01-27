import Link from 'next/link';

import { Button, Container, Title } from './styled-components';

import { AppRoutes } from '../../routes/app-routes';

const Header: React.FC = () => {
  return (
    <Container>
      <Link href={AppRoutes.BLOG}>
        <Title>Simple Blog</Title>
      </Link>

      <Link href={AppRoutes.ADD_POST}>
        <Button>Add New Blog</Button>
      </Link>
    </Container>
  );
};

export default Header;
