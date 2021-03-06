import { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput('');

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <TextArea
          value={commentText}
          onChange={onChangeCommentText}
          placeholder="댓글은 사랑입니다."
          rows={4}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ position: 'absolute', right: 0, bottom: -40 }}
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
