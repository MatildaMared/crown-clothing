import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
	products: [],
	setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);

	// useEffect(() => {
	//     const fetchProducts = async () => {
	//         const response = await fetch("/api/products");
	//         const json = await response.json();
	//         setProducts(json);
	//     };

	//     fetchProducts();
	// }, []);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
};
