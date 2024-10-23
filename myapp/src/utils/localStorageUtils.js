// src/utils/localStorageUtils.js

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('products');
      if (serializedState === null) {
        return undefined; // Nếu không có dữ liệu, trả về undefined để redux sử dụng giá trị mặc định
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('products', serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
  