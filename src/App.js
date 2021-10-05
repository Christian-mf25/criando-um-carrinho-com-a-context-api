import ProductList from "./components/ProductList";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import "./App.css"

function App() {
	return (
		<div className="App">
			<CatalogueProvider>
				<CartProvider>
					<ProductList type="catalogue" />
					<ProductList type="cart" />
				</CartProvider>
			</CatalogueProvider>
		</div>
	);
}

export default App;