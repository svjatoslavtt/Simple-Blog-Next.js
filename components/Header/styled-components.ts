import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  padding: 20px 0;
`;

export const Title = styled.h1`
  font-size: 36px;
  cursor: pointer;
`;

export const Button = styled.button`
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