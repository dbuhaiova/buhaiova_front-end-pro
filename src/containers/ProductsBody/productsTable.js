import React, { useState, useEffect } from 'react';
import './productsTable.css';
import { BiSortAlt2 } from 'react-icons/bi';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiBox } from 'react-icons/bi';

const ProductsTable = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://64de69e7825d19d9bfb29517.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="table-center">
      <p className="title">Products</p>
      <table>
        <thead>
          <tr>
            <th>ID <BiSortAlt2 /></th>
            <th>Category <BiSortAlt2 /></th>
            <th>Name <BiSortAlt2 /></th>
            <th>Quantity <BiSortAlt2 /></th>
            <th>Price (₴) <BiSortAlt2 /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productData.map(product => (
            <tr key={product.ID}>
              <td>{product.ID}</td>
              <td>{product.Category}</td>
              <td>{product.Name}</td>
              <td>{product.Quantity}</td>
              <td>{product.Price}</td>
              <td>
                <BsFillPencilFill className="icon" />
                <BiBox className="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
