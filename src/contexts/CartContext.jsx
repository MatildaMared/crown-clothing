import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
	const existingCartItems = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItems) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	cartIsOpen: false,
	setCartIsOpen: () => null,
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	const addItemToCart = (itemToAdd) => {
		setCartItems(addCartItem(cartItems, itemToAdd));
	};

	useEffect(() => {
		setCartCount(
			cartItems.reduce(
				(accumulator, cartItem) => accumulator + cartItem.quantity,
				0
			)
		);
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				cartIsOpen,
				setCartIsOpen,
				cartItems,
				addItemToCart,
				cartCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
