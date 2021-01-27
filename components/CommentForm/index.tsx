import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, FormWrapper, Textarea } from './styled-components';

import { Actions } from '../../redux/posts/actions';

type CommentFormTypes = {
  setIsShowCommentForm?: (param: boolean) => void;
};

const CommentForm: React.FC<CommentFormTypes> = ({ setIsShowCommentForm }) => {
  const dispatch = useDispatch();
  const { query } = useRouter();

  const [formData, setFormData] = useState<{ postId: number; body: string }>({
    postId: Number(query.postId),
    body: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(Actions.addCommentRequest(formData));
    setIsShowCommentForm(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Textarea
        placeholder="Your comment..."
        name="body"
        required={true}
        onChange={handleOnChange}
      />
      <Button>Send</Button>
    </FormWrapper>
  );
};

export default CommentForm;
