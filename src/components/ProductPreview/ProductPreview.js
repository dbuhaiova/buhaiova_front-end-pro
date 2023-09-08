import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCards.js/ProductCard.js';
import ProductPreviewHeader from '../../components/ProductPreviewHeader/ProductPreviewHeader.js'
import './ProductPreview.css';

const ProductPreview = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://64de69e7825d19d9bfb29517.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  return (
    <div className="product-preview">
      <ProductPreviewHeader />
      <div className="product-cards">
        {productData.map(product => (
          <Link key={product.id} to='/product/${product.id}' className="product-link">
            <ProductCard
              id={product.id}
              image={product.Image}
              name={product.Name}
              price={product.Price}
              quantity={product.Quantity}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPreview;
