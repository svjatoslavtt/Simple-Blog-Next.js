import { NextRouter, useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import {
  Button,
  FormElement,
  FormWrapper,
  Input,
  Label,
  Textarea,
} from './styled-components';

import { Post } from '../../types/post.types';

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
