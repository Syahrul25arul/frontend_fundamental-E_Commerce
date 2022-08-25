import React, { useEffect, useRef, useState } from "react";
import Layouts from "../components/layouts/Layouts";
import TopSale from "../components/section_top_sale";
import SectionProductDetail from "../components/section_product_detail";
import SectionProductDescription from "../components/section_product_description";
import { useProducts, useDetailProducts } from "../hooks/useProductFetch";
import { useParams } from "react-router-dom";
import { useCartHooks } from "../service/useCartHooks";
import { useSelector } from "react-redux";
import { selectUser } from "../container/userSlice";

function ProductDetail() {
	const [quantity, setQuantity] = useState(1);
	const [isLoading, data, getAllProduct] = useProducts();
	const [loading, dataDetail, getDetailProduct] = useDetailProducts();
	const { id } = useParams();
	const { loggedIn } = useSelector(selectUser);

	const { serviceAddToCart, alert, showAlert, showAlertFailed } = useCartHooks();

	const handleAddServiceToCart = () => {
		if (!loggedIn) showAlertFailed("login terlebih dahulu");
		else {
			const product = { ...dataDetail, quantity };
			serviceAddToCart(product);
			setQuantity(1);
		}
	};

	const handleIncementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrementQuantity = () => {
		quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
	};

	const intialState = useRef(true);

	useEffect(() => {
		if (data.length < 1 && intialState.current) {
			intialState.current = false;
			getAllProduct(1, 12, "", "");
		}
	}, [data.length, getAllProduct]);

	useEffect(() => {
		getDetailProduct(id);
	}, [id]);
	return (
		<Layouts title={`Product Detail`}>
			<SectionProductDetail loading={loading} product={dataDetail} handleAddServiceToCart={handleAddServiceToCart} quantity={quantity} handleIncementQuantity={handleIncementQuantity} handleDecrementQuantity={handleDecrementQuantity} alert={alert} removeAlert={showAlert} />
			<SectionProductDescription loading={loading} />
			<TopSale products={data} loading={isLoading} />
		</Layouts>
	);
}

export default ProductDetail;
