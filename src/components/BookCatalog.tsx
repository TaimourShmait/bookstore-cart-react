import type { Book, CartItem } from "../types.ts";
import BookCard from "./BookCard.tsx";

interface Props {
  books: Book[];
  onAddCartItem: (cartItem: CartItem) => void;
}

const BookCatalog = ({ books, onAddCartItem }: Props) => {
  const bookCards = books.map((book) => {
    return <BookCard book={book} key={book.id} onAddCartItem={onAddCartItem} />;
  });

  return (
    <div
      id="book-catalog"
      className="flex-grow-1 d-flex flex-column flex-wrap gap-2"
    >
      {bookCards}
    </div>
  );
};

export default BookCatalog;
