import { NextRouter, useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';

import { Post } from '../../types/post.types';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  alight-items: flex-start;
  width: 100%;
  margin-bottom: 25px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  height: 35px;
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

const Textarea = styled.textarea`
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

const Button = styled.button`
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

export type FormDataTypes = {
  title: string;
  body: string;
  router: NextRouter;
};

type PostFormTypes = {
  handleSubmit?: (event: FormEvent, params: FormDataTypes) => void;
  currentPost?: Post;
};

const PostForm: React.FC<PostFormTypes> = ({ handleSubmit, currentPost }) => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormDataTypes>({
    title: currentPost ? currentPost.title : '',
    body: currentPost ? currentPost.body : '',
    router,
  });

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormWrapper onSubmit={(event) => handleSubmit(event, formData)}>
      <FormElement>
        <Label htmlFor="title-field-1">Title</Label>
        <Input
          placeholder="your text..."
          id="title-field-1"
          name="title"
          required={true}
          onChange={handleOnChange}
          value={formData.title}
        />
      </FormElement>

      <FormElement>
        <Label htmlFor="body-field-1">Body</Label>
        <Textarea
          id="body-field-1"
          placeholder="your text..."
          name="body"
          required={true}
          onChange={handleOnChange}
          value={formData.body}
        />
      </FormElement>

      <Button>Send</Button>
    </FormWrapper>
  );
};

export default PostForm;
