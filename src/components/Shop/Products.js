import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'First Book',
    description: 'The first book I ever wrote',
    price: 6,
  },
  {
    id: 'p2',
    title: 'Second Book',
    description: 'The second book I ever wrote',
    price: 7,
  },
  {
    id: 'p3',
    title: 'Third Book',
    description: 'The third book I ever wrote',
    price: 8,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
