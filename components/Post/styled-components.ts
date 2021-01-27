import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 7px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 7px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 7px -5px rgba(0, 0, 0, 0.75);
  transition: all 0.125s ease-in-out;
  box-sizing: border-box;

  &:hover {
    background: #f3f3f3;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const Body = styled.div`
  fonst-size: 16px;
  margin-bottom: 10px;
`;

export const PostId = styled.div`
  font-size: 14px;
`;

export const Detail = styled.a`
  font-size: 15px;
  color: #385eb5;
`;