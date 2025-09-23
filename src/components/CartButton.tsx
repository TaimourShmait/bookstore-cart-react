interface Props {
  totalCartItems: number;
  showStatus: boolean;
  onShowCart: (show: boolean) => void;
}

const CartButton = ({ totalCartItems, showStatus, onShowCart }: Props) => {
  return (
    <button
      id="cart-btn"
      className="btn btn-primary d-flex gap-2 align-items-center justify-content-center p-1"
      onClick={() => onShowCart(!showStatus)}
    >
      {!showStatus ? (
        <>
          <i className="bi bi-cart"></i>Cart ({totalCartItems})
        </>
      ) : (
        <>
          <i className="bi bi-arrow-left"></i>Back to Books
        </>
      )}
    </button>
  );
};

export default CartButton;
