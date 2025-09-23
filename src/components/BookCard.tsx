import type { Book, CartItem } from "../types.ts";

interface Props {
  book: Book;
  onAddCartItem: (cartItem: CartItem) => void;
}

const BookCard = ({ book, onAddCartItem }: Props) => {
  return (
    <div className="book-card d-flex gap-3 p-2 rounded">
      <img
        src={book.coverImage}
        alt={book.title + " Cover Image"}
        className="rounded"
      />

      <div className="w-100 book-details d-flex flex-column justify-content-between">
        <div className="w-100 book-name p-2">
          <h5 className="card-title mb-2">{book.title}</h5>
          <p className="text-muted small mb-1">by {book.author}</p>
          <span className="badge book-genre bg-info text-dark small mb-2 me-2 p-1">
            {book.genre}
          </span>
          <p className="book-description card-text text-muted small mb-2">
            {book.description}
          </p>
          <span className="badge bg-secondary fs-6 p-1 book-price">
            $ {book.price}
          </span>
        </div>

        <button
          className="btn btn-outline-success p-1 d-flex align-items-center gap-1 add-to-cart-btn"
          onClick={() => {
            onAddCartItem({ book, quantity: 1 });
          }}
        >
          <i className="bi bi-cart-plus"></i>Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
