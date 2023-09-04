import React, { useState, useEffect } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiBox } from 'react-icons/bi';
import Header from '../../components/ProductsHeader/header';
import Modal from '../../components/Modal/Modal.js'; // Import the Modal component
import ModalWindow from '../../components/ModalWindow/ModalWindow.js'; // Import the ModalWindow component
import './productsTable.css';

const ProductsTable = () => {
  const [productData, setProductData] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false); // Add state for Add Product modal
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    fetch('https://64de69e7825d19d9bfb29517.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`https://64de69e7825d19d9bfb29517.mockapi.io/products/${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setProductData(prevData => prevData.filter(product => product.id !== productId));
        hideModal();
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const showEditModal = (productId) => {
    setSelectedProductId(productId);
    setIsEditModalVisible(true);
    setModalTitle('Edit Product');
  };

  const showAddModal = () => {
    setIsAddModalVisible(true);
    setModalTitle('Add Product');
  };

  const hideEditModal = () => {
    setSelectedProductId(null);
    setIsEditModalVisible(false);
  };

  const hideAddModal = () => {
    setIsAddModalVisible(false);
  };

  const showModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setSelectedProductId(null);
    setIsModalVisible(false);
  };

  return (
    <div className="table-center">
      <Header onAddProductClick={showAddModal} />

      <p className="title">Products</p>
      {isEditModalVisible && (
        <ModalWindow
          title={modalTitle}
          isOpen={isEditModalVisible}
          onClose={hideEditModal}
          onSave={() => {
            // Handle editing the product data here
            // You can implement the logic to save the data
            hideEditModal(); // Close the modal after editing
          }}
        />
      )}
      {isAddModalVisible && (
        <ModalWindow
          title={modalTitle}
          isOpen={isAddModalVisible}
          onClose={hideAddModal}
          onSave={() => {
            // Handle adding a new product data here
            // You can implement the logic to save the data
            hideAddModal(); // Close the modal after adding
          }}
        />
      )}
      {isModalVisible && (
        <Modal
          title={modalTitle}
          message="Are you sure you want to delete this product?"
          onCancel={hideModal}
          onConfirm={() => handleDelete(selectedProductId)}
        />
      )}
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
            <tr key={product.id}>
              <td>{product.ID}</td>
              <td>{product.Category}</td>
              <td>{product.Name}</td>
              <td>{product.Quantity}</td>
              <td>{product.Price}</td>
              <td>
                <BsFillPencilFill className="icon" onClick={() => showEditModal(product.id)} />
                <BiBox className="icon" onClick={() => showModal(product.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
