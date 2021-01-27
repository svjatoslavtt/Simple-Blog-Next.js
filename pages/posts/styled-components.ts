import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

export const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
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
`;

export const PostId = styled.div`
  font-size: 20px;
`;

export const CommentWrapper = styled.section`
  width: 100%;
`;

export const Comment = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const CommentId = styled.div`
  font-size: 16px;
`;

export const CommentBody = styled.div`
  font-size: 15px;
`;

export const Button = styled.button`
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

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

export const ActionButtons = styled.div`
  display: flex;
`;