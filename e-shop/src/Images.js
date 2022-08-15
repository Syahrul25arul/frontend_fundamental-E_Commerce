function importAll(r) {
	let images = {};
	r.keys().map((item) => {
		return (images[item.replace("./", "")] = r(item));
	});
	return images;
}
const bannner = importAll(require.context("./assets", false, /\.(png|jpe?g|svg)$/));
const products = importAll(require.context("./assets/products", false, /\.(png|jpe?g|svg)$/));
const blog = importAll(require.context("./assets/blog", false, /\.(png|jpe?g|svg)$/));
export { bannner, products, blog };
