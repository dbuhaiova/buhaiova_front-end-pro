import React from 'react';
import { useParams } from 'react-router-dom';

const ProductId = () => {
  const { id } = useParams(); 

  return (
    <div>
      <p>Chosen product is: {id}</p>
    </div>
  );
};

export default ProductId;
