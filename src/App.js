const App = () => {
	const categories = [
		{
			id: 1,
			title: "Hats",
		},
		{
			id: 1,
			title: "Jackets",
		},
		{
			id: 1,
			title: "Sneakers",
		},
		{
			id: 1,
			title: "Women",
		},
		{
			id: 1,
			title: "Men",
		},
	];

	return (
		<section className="categories-container">
			{categories.map(({ id, title }) => (
				<article className="category-container" key={id}>
					<div className="background-image" />
					<div className="category-body-container">
						<h2>{title}</h2>
						<p>Shop Now</p>
					</div>
				</article>
			))}
		</section>
	);
};

export default App;
