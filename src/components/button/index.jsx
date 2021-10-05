import { CatalogueContext } from "../../providers/catalogue"
import { CartContext } from "../../providers/cart"
import { useContext } from "react"

const Button = ({ type, item }) => {
	const { addToCart, removeFromCart } = useContext(CartContext)
	const { addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext)

	const text = type === "catalogue" ? "Add to cart" : "Remove from cart"

	const handleClick = () => {
		if (type === "catalogue") {
			removeFromCatalogue(item)
			addToCart(item)
		} else {
			removeFromCart(item)
			addToCatalogue(item)
		}
	}

	return <button onClick={handleClick}>{text}</button>
}

export default Button
