import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart, selectCart } from "../container/cartSlice";
import { useAlertHooks } from "../hooks/useAlertHooks";

export const useCartHooks = () => {
	const dispatch = useDispatch();
	const { alert, showAlertSuccess, showAlertFailed, showAlert } = useAlertHooks();
	const { cart } = useSelector(selectCart);

	const serviceAddToCart = (product) => {
		if (cart.length < 1) {
			dispatch(addToCart([product]));
		} else {
			const findCart = cart.find((c) => c.id === product.id);
			!findCart ? dispatch(addToCart([...cart, product])) : dispatch(addToCart(cart.map((c) => (c.id === product.id ? { ...c, quantity: c.quantity + product.quantity } : c))));
		}
		showAlertSuccess("success add product to cart");
	};

	const serviceDeleteToCart = (id) => {
		dispatch(deleteCart(cart.filter((c) => c.id !== id)));
		showAlertFailed("delete cart success");
	};
	return { serviceDeleteToCart, serviceAddToCart, alert, showAlert, showAlertFailed };
};
