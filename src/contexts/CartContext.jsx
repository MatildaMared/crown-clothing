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

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== cartItemToRemove.id
		);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItems = (cartItems, cartItemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
	cartIsOpen: false,
	setCartIsOpen: () => null,
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearCartItem: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const addItemToCart = (itemToAdd) => {
		setCartItems(addCartItem(cartItems, itemToAdd));
	};

	const removeItemFromCart = (itemToRemove) => {
		setCartItems(removeCartItem(cartItems, itemToRemove));
	};

	const clearCartItem = (itemToRemove) => {
		setCartItems(clearCartItems(cartItems, itemToRemove));
	};

	useEffect(() => {
		setCartCount(
			cartItems.reduce(
				(accumulator, cartItem) => accumulator + cartItem.quantity,
				0
			)
		);

		setCartTotal(
			cartItems.reduce((accumulator, cartItem) => {
				return accumulator + cartItem.price * cartItem.quantity;
			}, 0)
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
				removeItemFromCart,
				clearCartItem,
				cartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
