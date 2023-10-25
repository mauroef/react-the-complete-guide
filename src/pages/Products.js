import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 1, title: 'Product 1' },
  { id: 2, title: 'Product 2' },
  { id: 3, title: 'Product 3' },
];

function ProductsPage() {
  return (
    <>
      <h1>My Products</h1>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
