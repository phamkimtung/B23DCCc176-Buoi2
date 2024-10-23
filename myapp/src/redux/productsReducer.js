// src/redux/productsReducer.js

const productsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [...state, action.payload];
      case 'EDIT_PRODUCT':
        return state.map(product =>
          product.id === action.payload.id ? action.payload : product
        );
      case 'DELETE_PRODUCT':
        return state.filter(product => product.id !== action.payload);
      case 'RESET_DATA':
        return []; // Reset về danh sách rỗng
      default:
        return state;
    }
  };
  
  export default productsReducer;
  