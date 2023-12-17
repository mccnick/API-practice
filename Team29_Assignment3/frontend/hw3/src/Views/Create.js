import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: {
      rate: '',
      count: ''
    }
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rate' || name === 'count') {
      setProduct({ ...product, rating: { ...product.rating, [name]: value } });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages
    try {
      const response = await axios.post('http://localhost:5000/products', product);
      setMessage(response.data.message); // Set the success message
      // Clear the form fields
      setProduct({
        id: '',
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: {
          rate: '',
          count: ''
        }
      });
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Error adding product'); // Set the error message
    }
  };

  return (
    <div className="flex pt-20 items-center ">
      <div className="p-5 flex-1">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="number" name="id" value={product.id} onChange={handleInputChange} placeholder="ID" />
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="text" name="title" value={product.title} onChange={handleInputChange} placeholder="Title" />
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" />
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="text" name="description" value={product.description} onChange={handleInputChange} placeholder="Description" />
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="text" name="category" value={product.category} onChange={handleInputChange} placeholder="Category" />
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="text" name="image" value={product.image} onChange={handleInputChange} placeholder="Image URL" />
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="number" name="rate" value={product.rating.rate} onChange={handleInputChange} placeholder="Rating (1.0 - 5.0)" min="1" max="5" step="0.1" />
          <input className="w-full p-2 border border-black bg-gray-100 rounded" type="number" name="count" value={product.rating.count} onChange={handleInputChange} placeholder="Rating Count" />
          <div className="flex justify-center mt-6">
         

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Add Product</button>
           
          </div>
          <div>
          {message && <p className="text-center">{message}</p>}
          </div>
        </form>
      </div>
      <div className="p-5 flex-1 border-l border-gray-300">
        <div className="text-lg font-bold mb-2">Example</div>
        <div className="mb-2"><strong>ID:</strong> 21</div>
        <div className="mb-2"><strong>Title:</strong> Apple Pencil 2</div>
        <div className="mb-2"><strong>Price:</strong> 89.99</div>
        <div className="mb-2"><strong>Description:</strong> This device is a digital pencil that works with Apple iPads.</div>
        <div className="mb-2"><strong>Category:</strong> electronics </div>
        <div className="mb-2"><strong>Image:</strong> URL Image address</div>
        <div className="mb-2"><strong>Rating:</strong> 3.6 </div>
        <div className="mb-2"><strong>Rating count:</strong>  145 </div>
      </div>
    </div>
  );

};

export default Create;
