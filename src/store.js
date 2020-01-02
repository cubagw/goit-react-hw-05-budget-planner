import { createStore } from 'redux';
import mainReducer from './mainReducer';

const store = createStore(
  reducer,
  window.__redux_devtools_extension__ && window.__redux_devtools_extension__(),
);

export default store;
