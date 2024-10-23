// src/pages/HomePage.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <h1>Danh Sách Hàng Hóa</h1>
      <Link to="/add">Thêm Sản Phẩm</Link>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <li key={product.id}>
              <span>{product.name} - {product.price} VND</span>
              <div>
                <Link to={`/edit/${product.id}`}>Chỉnh Sửa</Link>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </div>
            </li>
          ))
        ) : (
          <li>Không có sản phẩm nào.</li>
        )}
      </ul>
      <div className="pagination">
        <button 
          className="page-button" 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Trang Trước
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`} 
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className="page-button" 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Trang Sau
        </button>
      </div>
    </div>
  );
};

export default HomePage;
