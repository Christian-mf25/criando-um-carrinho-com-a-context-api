import { CatalogueContext } from "../../providers/catalogue"
import { CartContext } from "../../providers/cart"
import { useContext } from "react"
import Button from "../button"
import "./style.css"

const ProductList = ({ type }) => {

	const { catalogue } = useContext(CatalogueContext);
	const { cart } = useContext(CartContext);

	return (
		<ul className="container" >
			{type === "catalogue" &&
				catalogue.map((item, index) => (
					<li key={index}
						className="list">
						<h3 className="name">{item.name}</h3>
						<p className="price">{`R$ ${item.price}`}</p>
						<Button type={type} item={item} />
					</li>
				))}

			{type === "cart" &&
				cart.map((item, index) => (
					<li key={index}
						className="list">
						<h3 className="name">{item.name}</h3>
						<p className="price">{item.price}</p>
						<Button
						 type={type}
						  item={item}
							className="remove" />
					</li>
				))}
		</ul>
	);
};

export default ProductList;
