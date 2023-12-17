import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async () => {
    if (!selectedProductId) {
      setError('Please select a product');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/products/${selectedProductId}`);
      if (response.status === 200) {
        setIsDeleted(true);
        setError('');
        // Remove deleted product from the list
        setProducts(products.filter(product => product.id !== selectedProductId));
      } else {
        setError('Failed to delete product');
      }
    } catch (error) {
      setError('Error deleting product');
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-5 text-center">Delete Product</h2>
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}
        {isDeleted && <p className="text-green-500 text-center mb-3">Product successfully deleted.</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select Product to Delete:</label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
          >
            <option value="">Select a product...</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                ID: {product.id} - {product.title}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDelete}>
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
