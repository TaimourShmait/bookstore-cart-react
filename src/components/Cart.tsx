import CartItemCard from "./CartItemCard.tsx";
import type { CartItem } from "../types.ts";

interface Props {
  cartItems: CartItem[];
  totalCartItems: number;
  onAddCartItem: (cartItem: CartItem) => void;
  onRemoveCartItem: (id: number) => void;
  onDecrementCartItemQty: (id: number) => void;
}

const Cart = ({
  cartItems,
  totalCartItems,
  onAddCartItem,
  onRemoveCartItem,
  onDecrementCartItemQty,
}: Props) => {
  let totalPrice = 0;
  for (let i: number = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].book.price * cartItems[i].quantity;
  }

  const cartItemCards = cartItems.map((cartItem) => {
    return (
      <CartItemCard
        cartItem={cartItem}
        key={cartItem.book.id}
        onAddCartItem={onAddCartItem}
        onRemoveCartItem={onRemoveCartItem}
        onDecrementCartItemQty={onDecrementCartItemQty}
      />
    );
  });

  return (
    <div id="cart" className="d-flex flex-column gap-2 w-100">
      <h5>There are {totalCartItems} books in your cart!</h5>
      <div id="cart" className="flex-grow-1 d-flex flex-column flex-wrap gap-2">
        {cartItemCards}
      </div>
      {totalPrice > 0 && (
        <h5 className="badge bg-success fs-5 p-3">
          Total Price - ${totalPrice}
        </h5>
      )}
    </div>
  );
};

export default Cart;
