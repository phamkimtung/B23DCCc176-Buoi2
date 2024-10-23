import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  // Tạo danh sách số trang dựa trên tổng số sản phẩm và số sản phẩm mỗi trang
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {/* Nút quay lại trang trước */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Trang trước
          </button>
        </li>

        {/* Hiển thị các nút số trang */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}

        {/* Nút chuyển sang trang sau */}
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
            Trang sau
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
