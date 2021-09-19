import axios from "axios";
import { BOOK_API_URL } from "../constants/book";
import { BookAddReqType, BookType } from "../types/book";

export async function getBooksAsync(token: string): Promise<BookType[]> {
  const res = await axios.get(BOOK_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function addBookAsync(
  token: string,
  book: BookAddReqType
): Promise<BookType> {
  const res = await axios.post(BOOK_API_URL, book, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function deleteBookAsync(
  token: string,
  id: number
): Promise<void> {
  const res = await axios.delete(`${BOOK_API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.success;
}
