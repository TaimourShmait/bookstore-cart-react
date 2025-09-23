export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  genre: string;
  coverImage: string;
  description: string;
  rating: number;
  pages: number;
}

export interface CartItem {
  book: Book;
  quantity: number;
}
