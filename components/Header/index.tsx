import Link from 'next/link';
import styled from 'styled-components';

import { AppRoutes } from '../../routes/app-routes';

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50px;
	margin-bottom: 30px;
	padding: 20px 0;
`;

const Title = styled.h1`
	font-size: 36px;
	cursor: pointer;
`;

const Button = styled.button`
	border: 1px dashed #333333;
	padding: 10px 15px;
	border-radius: 3px;
	outline: none;
	background: none;
	font-size: 13px;
	cursor: pointer;
	text-transform: uppercase;

	&:hover {
		background: #f7f7f7;
	}
`;

const Header: React.FC = () => {
	return (
		<Container>
			<Link href={AppRoutes.BLOG}><Title>Simple Blog</Title></Link>

			<Link href={AppRoutes.ADD_POST}><Button>Add New Blog</Button></Link>
		</Container>
	);
};

export default Header;