// src/redux/store.js

import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from '../utils/localStorageUtils';

const persistedState = loadState(); // Tải dữ liệu từ LocalStorage

const store = createStore(
  rootReducer,
  persistedState // Khởi tạo state từ localStorage nếu có
);

store.subscribe(() => {
  saveState({
    products: store.getState().products, // Lưu lại dữ liệu products vào LocalStorage
  });
});

export default store;
