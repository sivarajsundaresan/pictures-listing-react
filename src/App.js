import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import ImageList from './components/ImageList/ImageList';

import configureStore from './store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <ImageList />
      </Fragment>
      </Provider>
    );
  }
}

export default App;