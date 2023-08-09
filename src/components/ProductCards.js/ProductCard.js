import { BsCart4 } from 'react-icons/bs';
import './ProductCard.css';

const ProductCard = ({ image, text, price, quantity }) => {
  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-image" />
      <p className="product-text">{text}</p>
      <div className="price-quantity">
        <p className="price">
          {price}
          <span className="currency">₴</span>
        </p>
        <p className="quantity">Кількість: {quantity}</p>
      </div>
      <div className="row">
        <BsCart4 className="cart-icon" size={30}/>
        <p className="status">Готовий до відправки</p>
      </div>
    </div>
  );
};

export default ProductCard;
