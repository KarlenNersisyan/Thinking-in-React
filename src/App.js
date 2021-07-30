import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './helpers/products';

export default function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
