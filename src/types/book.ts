export interface BookType {
  bookId: number;
  title: string;
  author: string;
  createdAt: string;
  url: string;
}

export interface BookAddReqType {
  title: string;
  author: string;
  url: string;
  comment: string;
}
