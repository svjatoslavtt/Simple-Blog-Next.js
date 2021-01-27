import styled from 'styled-components';

export const Container = styled.section`
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

export const FormWrapper = styled.div`
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

export const Button = styled.button`
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
    background-color: #5a5a5a;
  }
`;
