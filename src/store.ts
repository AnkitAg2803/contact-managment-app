import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a root reducer

const store = createStore(rootReducer); // Create the Redux store with the root reducer

export default store;
