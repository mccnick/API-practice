import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadSingleProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products`);
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products');
        console.error('There was an error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFetchProduct = async () => {
    if (!selectedProductId) {
      setError('Please select a product');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/products/${selectedProductId}`);
      setProduct(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching product');
      console.error('There was an error fetching the product:', error);
    }
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="w-3/4 max-w-4xl p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-5 text-center">Read Product Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select Product:</label>
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
        <div className="flex justify-center mb-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            onClick={handleFetchProduct}
          >
            Display Product
          </button>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {product && (
          <div className="bg-white shadow-md rounded p-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
              </div>
              <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold">ID: {product.id} - {product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-600 font-semibold">Price: ${product.price}</p>
                <p className="text-gray-600">Category: {product.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadSingleProduct;
