import ProductCard from '../../components/ProductCards.js/ProductCard.js';
import picture from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import ProductPreviewHeader from '../../components/ProductPreviewHeader/ProductPreviewHeader.js'
import './ProductPreview.css';

const ProductPreview = () => {
  const productData = [
    {
      id: 1,
      image: picture, 
      text: 'Ноутбук Lenovo Y50-70 Aluminum Black',
      price: '25000',
      quantity: 5,
    },
    {
      id: 2,
      image: picture, 
      text: 'Ноутбук Lenovo Y50-70 Aluminum Black',
      price: '25000',
      quantity: 5,
    },
    {
      id: 3,
      image: picture, 
      text: 'Ноутбук Lenovo Y50-70 Aluminum Black',
      price: '25000',
      quantity: 5,
    },
    {
      id: 4,
      image: picture, 
      text: 'Ноутбук Lenovo Y50-70 Aluminum Black',
      price: '25000',
      quantity: 5,
    },
    {
      id: 5,
      image: picture, 
      text: 'Ноутбук Lenovo Y50-70 Aluminum Black',
      price: '25000',
      quantity: 5,
    },
    {
      id: 6,
      image: picture, 
      text: 'Ноутбук Lenovo Y50-70 Aluminum Black',
      price: '25000',
      quantity: 5,
    },
  ];
  return (
    <div className="product-preview">
      <ProductPreviewHeader />
      <div className="product-cards">
        {productData.map((product, index) => (
       <Link key={product.id} to={`/product/${product.id}`} className="product-link">
       <ProductCard
         key={index}
         id={product.id}
         image={product.image}
         text={product.text}
         price={product.price}
         quantity={product.quantity}
       />
     </Link>

        ))}
      </div>
    </div>
      );
    };
    export default ProductPreview;