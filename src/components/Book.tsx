import React from "react";
import { Link } from "react-router-dom";
import {
  BookOutlined,
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import moment from "moment";
import { BookType } from "../types/book";
import styles from "./Book.module.css";

interface BookProps extends BookType {
  deleteBook: (id: number) => void;
}

const Book: React.FC<BookProps> = (props) => {
  const { bookId, title, author, createdAt, url, deleteBook } = props;

  const clickDelete = () => {
    deleteBook(bookId);
  };
  return (
    <div className={styles.book}>
      <div className={styles.title}>
        <Link to={`/book/${bookId}`}>
          <BookOutlined /> {title}
        </Link>
      </div>
      <div className={styles.author}>
        <Link className={styles.link_detail_author} to={`/book/${bookId}`}>
          <BookOutlined /> {author}
        </Link>
      </div>
      <div className={styles.created}>
        {moment(createdAt).format("MM-DD-YYYY hh:mm a")}
      </div>
      <div className={styles.tooltips}>
        <Tooltip title="URL">
          <a
            className={styles.link_url}
            href={url}
            rel="noreferrer"
            target={"_blank"}
          >
            <Button
              className={styles.button_url}
              size="small"
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
            />
          </a>
        </Tooltip>
        <Tooltip title="Edit">
          <Button
            className={styles.button_edit}
            size="small"
            shape="circle"
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            className={styles.button_delete}
            size="small"
            type="primary"
            shape="circle"
            danger
            icon={<DeleteOutlined />}
            onClick={clickDelete}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Book;
