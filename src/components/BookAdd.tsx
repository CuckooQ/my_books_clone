import { Button, Input, PageHeader, message as messageDialog } from "antd";
import TextArea from "antd/lib/input/TextArea";
import TextAreaType from "rc-textarea";
import React, { useRef } from "react";
import Layout from "./Layout";
import { ForkOutlined } from "@ant-design/icons";
import { BookAddReqType } from "../types/book";
import styles from "./BookAdd.module.css";

interface BookAddProps {
  loading: boolean;
  goBack: () => void;
  logout: () => void;
  addBook: (book: BookAddReqType) => void;
}

const BookAdd: React.FC<BookAddProps> = (props) => {
  const { loading, goBack, logout, addBook } = props;
  const titleRef = useRef<Input>(null);
  const commentRef = useRef<TextAreaType>(null);
  const authorRef = useRef<Input>(null);
  const urlRef = useRef<Input>(null);

  const clickBack = () => {
    goBack();
  };
  const clickLogout = () => {
    logout();
  };
  const clickAdd = () => {
    const title = titleRef.current!.state.value;
    const comment = commentRef.current!.resizableTextArea.props.value as string;
    const author = authorRef.current!.state.value;
    const url = urlRef.current!.state.value;

    if (
      title === undefined ||
      comment === undefined ||
      author === undefined ||
      url === undefined
    ) {
      messageDialog.error("Please fill out all inputs");
      return;
    }

    const book: BookAddReqType = {
      title,
      author,
      url,
      comment,
    };
    addBook(book);
  };
  return (
    <Layout>
      <PageHeader
        onBack={clickBack}
        title={
          <div>
            <ForkOutlined />
            Add Book
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button
            className={styles.button_logout}
            key=""
            type="primary"
            onClick={clickLogout}
          >
            Logout
          </Button>,
        ]}
      />
      <div className={styles.add}>
        <div className={styles.input_title}>
          Title
          <span className={styles.required}>*</span>
        </div>
        <div className={styles.input_area}>
          <Input ref={titleRef} placeholder="Title" />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}>*</span>
        </div>
        <div>
          <TextArea ref={commentRef} rows={4} placeholder="Comment" />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}>*</span>
        </div>
        <div className={styles.input_area}>
          <Input ref={authorRef} placeholder="Author" />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}>*</span>
        </div>
        <div className={styles.input_area}>
          <Input ref={urlRef} placeholder="URL" />
        </div>
        <div className={styles.button_area}>
          <Button
            className={styles.button}
            size="large"
            loading={loading}
            onClick={clickAdd}
          >
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default BookAdd;
