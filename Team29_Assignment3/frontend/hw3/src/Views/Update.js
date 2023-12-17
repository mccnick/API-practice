import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

  const handleUpdatePrice = async (e) => {
    e.preventDefault();

    // checking for non-negative and non-zero price
    if (!selectedProductId || newPrice <= 0) {
      setError('Please select a product and enter a valid price');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/products/${selectedProductId}/price`, { price: newPrice });
      setSuccess(`Price updated successfully for product ID: ${selectedProductId}`);
      setError('');
    } catch (error) {
      setError('Error updating product price');
      setSuccess('');
      console.error('Error updating product price:', error);
    }
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-5">Update Product Price</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleUpdatePrice} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Select Product</label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-2 focus:outline-none focus:shadow-outline"
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
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">New Price</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              min="0.01" 
              step="0.01" 
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              placeholder="Enter New Price"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update Price</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
