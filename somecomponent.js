// SomeComponent.js
import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store

const SomeComponent = () => {
  return (
    <Provider store={store}>
      {/* Your component JSX */}
    </Provider>
  );
};

export default SomeComponent;
