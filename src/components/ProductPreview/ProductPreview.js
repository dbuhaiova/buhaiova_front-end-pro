import ProductPreviewHeader from '../ProductPreviewHeader/ProductPreviewHeader.js';
import ProductCard from '../ProductCards.js/ProductCard.js';
import picture from '../../images/laptop.png';
import './ProductPreview.css';

const ProductPreview = () => {
  const productData = [
    {
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
          <ProductCard
            key={index}
            image={product.image}
            text={product.text}
            price={product.price}
            quantity={product.quantity}
          />
        ))}{productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              text={product.text}
              price={product.price}
              quantity={product.quantity}
            />
          ))}{productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              text={product.text}
              price={product.price}
              quantity={product.quantity}
            />
          ))}{productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              text={product.text}
              price={product.price}
              quantity={product.quantity}
            />
          ))}{productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              text={product.text}
              price={product.price}
              quantity={product.quantity}
            />
          ))}{productData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              text={product.text}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductPreview;
