// src/pages/EditProductPage.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

const EditProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products);
  const productToEdit = products.find(product => product.id === parseInt(id));

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: productToEdit.id,
      name,
      price: parseFloat(price),
    };
    dispatch(editProduct(updatedProduct));
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Chỉnh Sửa Sản Phẩm</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">Cập Nhật Sản Phẩm</button>
      </form>
    </div>
  );
};

export default EditProductPage;
