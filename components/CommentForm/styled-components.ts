import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 50px;
`;

export const Textarea = styled.textarea`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #f7f7f7;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  border: 1px solid #ccc;
  outline: none;
  box-sizing: border-box;
  resize: none;
`;

export const Button = styled.button`
  height: 40px;
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