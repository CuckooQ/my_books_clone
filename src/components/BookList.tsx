import { Button, PageHeader, Table } from "antd";
import React, { useEffect } from "react";
import { BookType } from "../types/book";
import Layout from "./Layout";
import Book from "./Book";
import styles from "./BookList.module.css";

interface BookListProps {
  bookList: BookType[] | null;
  loading: boolean;
  error: Error | null;
  getBookList: () => void;
  logout: () => void;
  goAdd: () => void;
  deleteBook: (id: number) => void;
}

const BookList: React.FC<BookListProps> = (props) => {
  const { bookList, loading, error, getBookList, logout, goAdd, deleteBook } =
    props;

  useEffect(() => {
    getBookList();
  }, [getBookList]);
  useEffect(() => {
    error && logout();
  }, [error, logout]);

  const clickLogout = () => {
    logout();
  };
  const clickAdd = () => {
    goAdd();
  };

  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button
            className={styles.button}
            key="add"
            type="primary"
            onClick={clickAdd}
          >
            Add Book
          </Button>,
          <Button
            className={styles.button}
            key="logout"
            type="primary"
            onClick={clickLogout}
          >
            Logout
          </Button>,
        ]}
      />
      <Table
        className={styles.table}
        dataSource={bookList || []}
        columns={[
          {
            title: "Book",
            dataIndex: "book",
            key: "book",
            render: (text, record) => (
              <Book {...record} deleteBook={deleteBook} />
            ),
          },
        ]}
        loading={loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
      />
    </Layout>
  );
};

export default BookList;
