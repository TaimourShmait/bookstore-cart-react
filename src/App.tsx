import type { Book, CartItem } from "./types.ts";
import CartButton from "./components/CartButton.tsx";
import BookCatalog from "./components/BookCatalog.tsx";
import Cart from "./components/Cart.tsx";
import SearchBar from "./components/SearchBar.tsx";
import CategoryFilter from "./components/CategoryFilter.tsx";

import { useState } from "react";

// Sample data!!!
const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 16.99,
    genre: "Fiction",
    coverImage: "/public/image.png",
    description: "A magical story about the choices that make us who we are.",
    rating: 4.5,
    pages: 288,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 18.99,
    genre: "Self-Help",
    coverImage: "/public/image.png",
    description:
      "Tiny changes, remarkable results. Build good habits and break bad ones.",
    rating: 4.8,
    pages: 320,
  },
  {
    id: 3,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 15.99,
    genre: "Romance",
    coverImage: "/public/image.png",
    description: "A reclusive Hollywood icon reveals her deepest secrets.",
    rating: 4.7,
    pages: 400,
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    price: 19.99,
    genre: "Science Fiction",
    coverImage: "/public/image.png",
    description:
      "Epic tale of politics, religion, and ecology on a desert planet.",
    rating: 4.6,
    pages: 688,
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    price: 17.99,
    genre: "Memoir",
    coverImage: "/public/image.png",
    description: "A memoir about the transformative power of education.",
    rating: 4.4,
    pages: 334,
  },
  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 14.99,
    genre: "Thriller",
    coverImage: "/public/image.png",
    description:
      "A psychotherapist becomes obsessed with treating a woman who refuses to speak.",
    rating: 4.3,
    pages: 336,
  },
  {
    id: 7,
    title: "Becoming",
    author: "Michelle Obama",
    price: 22.99,
    genre: "Biography",
    coverImage: "/public/image.png",
    description:
      "An intimate memoir by the former First Lady of the United States.",
    rating: 4.9,
    pages: 448,
  },
  {
    id: 8,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 16.5,
    genre: "Mystery",
    coverImage: "/public/image.png",
    description:
      "A coming-of-age murder mystery set in the marshlands of North Carolina.",
    rating: 4.5,
    pages: 384,
  },
  {
    id: 9,
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 20.99,
    genre: "Business",
    coverImage: "/public/image.png",
    description:
      "How constant innovation creates radically successful businesses.",
    rating: 4.2,
    pages: 336,
  },
  {
    id: 10,
    title: "Circe",
    author: "Madeline Miller",
    price: 17.5,
    genre: "Fantasy",
    coverImage: "/public/image.png",
    description:
      "The story of the Greek goddess who transforms from nymph to witch.",
    rating: 4.6,
    pages: 393,
  },
  {
    id: 11,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 21.99,
    genre: "History",
    coverImage: "/public/image.png",
    description:
      "A brief history of humankind from the Stone Age to the present.",
    rating: 4.7,
    pages: 512,
  },
  {
    id: 12,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    price: 15.99,
    genre: "Mystery",
    coverImage: "/public/image.png",
    description: "Four unlikely friends meet weekly to investigate cold cases.",
    rating: 4.4,
    pages: 336,
  },
  {
    id: 13,
    title: "Born a Crime",
    author: "Trevor Noah",
    price: 18.5,
    genre: "Comedy",
    coverImage: "/public/image.png",
    description: "Stories from a South African childhood during apartheid.",
    rating: 4.8,
    pages: 304,
  },
  {
    id: 14,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    price: 16.99,
    genre: "Dystopian",
    coverImage: "/public/image.png",
    description:
      "A chilling tale of a totalitarian society where women have lost all rights.",
    rating: 4.5,
    pages: 311,
  },
  {
    id: 15,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    price: 19.99,
    genre: "Literary Fiction",
    coverImage: "/public/image.png",
    description:
      "An artificial friend observes the world with wonder and care.",
    rating: 4.3,
    pages: 303,
  },
  {
    id: 16,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 17.99,
    genre: "Spirituality",
    coverImage: "/public/image.png",
    description:
      "A guide to spiritual enlightenment and living in the present moment.",
    rating: 4.1,
    pages: 236,
  },
  {
    id: 17,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 18.99,
    genre: "Science Fiction",
    coverImage: "/public/image.png",
    description:
      "A lone astronaut must save humanity with only his wits and humor.",
    rating: 4.6,
    pages: 496,
  },
  {
    id: 18,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 19.5,
    genre: "Self-Help",
    coverImage: "/public/image.png",
    description: "Powerful lessons in personal change and leadership.",
    rating: 4.2,
    pages: 381,
  },
  {
    id: 19,
    title: "Normal People",
    author: "Sally Rooney",
    price: 16.99,
    genre: "Literary Fiction",
    coverImage: "/public/image.png",
    description:
      "The complex relationship between two Irish teenagers over several years.",
    rating: 4.0,
    pages: 266,
  },
  {
    id: 20,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 14.5,
    genre: "Business",
    coverImage: "/public/image.png",
    description:
      "Classic guide to achieving wealth through positive thinking and goal setting.",
    rating: 4.3,
    pages: 238,
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [select, setSelect] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      searchInput === "" ||
      book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      book.author.toLowerCase().includes(searchInput.toLowerCase());

    const matchesCategory = select === "" || book.genre === select;

    return matchesSearch && matchesCategory; 
  });

  const handleShowCart = (showStatus: boolean) => {
    console.log("Show Cart!");
    setShowCart(showStatus);
  };

  const addCartItem = (cartItem: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === cartItem.book.id);

      if (existing) {
        console.log("Holy smokes! This books is already in your cart!");
        return prev.map((item) =>
          item.book.id === cartItem.book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, cartItem];
    });
  };

  const getTotalCartItems = () => {
    let totalCartItems = 0;
    for (let i: number = 0; i < cartItems.length; i++) {
      totalCartItems += cartItems[i].quantity;
    }

    return totalCartItems;
  };

  const decrementCartItemQty = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.book.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeCartItem = (id: number) => {
    if (confirm("Are you sure you want to remove this book from your cart?"))
      setCartItems((prev) => prev.filter((item) => item.book.id != id));
    else return;
  };

  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-2">
        <p className="d-flex gap-2 align-items-center">
          <i className="bi bi-book"></i>PageTurner Books
        </p>
        <div id="controls" className="d-flex gap-2">
          {!showCart && (
            <>
              {" "}
              <SearchBar
                searchValue={searchInput}
                onSearchInput={setSearchInput}
              />
              <CategoryFilter selectValue={select} onSelect={setSelect} />
            </>
          )}

          <CartButton
            totalCartItems={getTotalCartItems()}
            showStatus={showCart}
            onShowCart={handleShowCart}
          />
        </div>
      </header>

      <main className="flex-grow-1 d-flex p-2">
        {showCart ? (
          <Cart
            cartItems={cartItems}
            totalCartItems={getTotalCartItems()}
            onAddCartItem={addCartItem}
            onRemoveCartItem={removeCartItem}
            onDecrementCartItemQty={decrementCartItemQty}
          />
        ) : (
          <BookCatalog books={filteredBooks} onAddCartItem={addCartItem} />
        )}
      </main>

      <footer className="d-flex justify-content-between align-items-cetner p-2">
        <p>Taimour Shmait</p>
        <p>React Practice - September 2025</p>
      </footer>
    </>
  );
};

export default App;
