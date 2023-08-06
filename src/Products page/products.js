import Header from '../components/products header/header';
import Body from '../components/products body/body.js';
import './products.css'

const ProductTable = () => {
  return (
    <div className="navbar-products">
      <Header />
    </div>,
    <div className="body">
      <Body />
    </div>
  );
};

export default ProductTable;
