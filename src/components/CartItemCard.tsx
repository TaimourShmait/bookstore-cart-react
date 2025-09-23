import type { CartItem } from "../types.ts";

interface Props {
  cartItem: CartItem;
  onAddCartItem: (cartItem: CartItem) => void;
  onRemoveCartItem: (id: number) => void;
  onDecrementCartItemQty: (id: number) => void;
}

const CartItemCard = ({
  cartItem,
  onAddCartItem,
  onRemoveCartItem,
  onDecrementCartItemQty,
}: Props) => {
  const totalPrice = (cartItem.book.price * cartItem.quantity).toFixed(2);

  return (
    <div className="cart-item-card w-100 d-flex gap-3 p-3 rounded border">
      <img
        src={cartItem.book.coverImage}
        alt={cartItem.book.title + " Cover Image"}
        className="rounded cart-item-image"
      />

      <div className="w-100 cart-details d-flex flex-column justify-content-between">
        <div className="cart-item-info">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="card-title mb-1 fw-bold">{cartItem.book.title}</h6>
            <span className="badge p-2 bg-secondary">
              Qty: {cartItem.quantity}
            </span>
          </div>

          <p className="book-description card-text text-muted small mb-2 text-truncate">
            {cartItem.book.description}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Unit: ${cartItem.book.price}</small>
            <span className="fw-bold text-primary fs-6">
              Total: ${totalPrice}
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-2">
          <button
            className="crud-btn btn btn-outline-success btn-sm d-flex align-items-center justify-content-center"
            onClick={() => onAddCartItem(cartItem)}
          >
            <i className="bi bi-plus"></i>
          </button>
          <button
            className="crud-btn btn btn-outline-warning btn-sm d-flex align-items-center justify-content-center"
            onClick={() => onDecrementCartItemQty(cartItem.book.id)}
          >
            <i className="bi bi-dash"></i>
          </button>
          <button
            className="crud-btn btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center"
            onClick={() => onRemoveCartItem(cartItem.book.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItemCard;
