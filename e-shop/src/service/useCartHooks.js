import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../container/cartSlice";

export const useCartHooks = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector(selectCart);
	const serviceAddToCart = (product) => {
		cart.length < 1 ? dispatch(addToCart([product])) : dispatch(addToCart([...cart, product]));
	};
	return { serviceAddToCart };
};
