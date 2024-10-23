// src/pages/AddProductPage.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    dispatch(addProduct(newProduct));
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Thêm Sản Phẩm</button>
      </form>
    </div>
  );
};

export default AddProductPage;
