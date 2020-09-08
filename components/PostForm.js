import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

import useInput from "../hooks/useInput";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const { imagePaths } = useSelector((state) => state.post);
  const [text, onChangeText, reset] = useInput("");
  const onsubmit = useCallback(() => {
    dispatch(addPost);
    reset();
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <>
      <Form
        style={{ margin: "10px 0 20px" }}
        encType="multipart/form-data"
        onFinish={onsubmit}
      >
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
        />

        <div>
          <input type="file" multiple hidden ref={imageInput} />
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button type="primary" style={{ float: "right" }} htmlType="submit">
            짹짹
          </Button>
        </div>
        <div>
          {imagePaths &&
            imagePaths.map((v) => (
              <div key={v} style={{ display: "inline-block" }}>
                <img src={v} style={{ width: "200px" }} alt={v} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            ))}
        </div>
      </Form>
    </>
  );
};

export default PostForm;
