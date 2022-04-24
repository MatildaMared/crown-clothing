import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Navigation from "./routes/navigation/Navigation";

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="login" element={<Login />} />
			</Route>
		</Routes>
	);
};

export default App;
