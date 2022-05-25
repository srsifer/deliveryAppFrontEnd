import { configureStore } from '@reduxjs/toolkit';
import productCartReducer from './slice/productCart';
import themeSelectReducer from './slice/themeSelect'


export default configureStore({
  reducer: { productCartReducer, themeSelectReducer },
});
