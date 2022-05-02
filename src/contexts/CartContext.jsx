import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const CART_ACTION_TYPES = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
	SET_CART_IS_OPEN: "SET_CART_IS_OPEN",
};

const INITIAL_STATE = {
	cartCount: 0,
	cartTotal: 0,
	cartItems: [],
	cartIsOpen: false,
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_CART_IS_OPEN:
			return {
				...state,
				cartIsOpen: payload,
			};
		default:
			throw new Error(`Unhandled type of ${type} in cartReducer`);
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const { cartItems, cartCount, cartTotal, cartIsOpen } = state;

	const addItemToCart = (itemToAdd) => {
		const newCartItems = addCartItem(cartItems, itemToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (itemToRemove) => {
		const newCartItems = removeCartItem(cartItems, itemToRemove);

		updateCartItemsReducer(newCartItems);
	};

	const clearCartItem = (itemToRemove) => {
		const newCartItems = clearCartItems(cartItems, itemToRemove);

		updateCartItemsReducer(newCartItems);
	};

	const setCartIsOpen = (cartIsOpen) => {
		dispatch(createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, cartIsOpen));
	};

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(accumulator, cartItem) => accumulator + cartItem.quantity,
			0
		);
		const newCartTotal = newCartItems.reduce((accumulator, cartItem) => {
			return accumulator + cartItem.price * cartItem.quantity;
		}, 0);

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartTotal: newCartTotal,
			})
		);
	};

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
