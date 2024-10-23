// src/redux/actions.js

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
  });
  
  export const editProduct = (product) => ({
    type: 'EDIT_PRODUCT',
    payload: product
  });
  
  export const deleteProduct = (productId) => ({
    type: 'DELETE_PRODUCT',
    payload: productId
  });
  
  export const resetData = () => {
    localStorage.removeItem('products'); // Xóa dữ liệu trong LocalStorage
    return {
      type: 'RESET_DATA'
    };
  };
  