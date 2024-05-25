import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import ReduxComponent from './components/redux/reduxComponent';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ReduxComponent />
      </div>
    </Provider>
  );
};

export default App;
