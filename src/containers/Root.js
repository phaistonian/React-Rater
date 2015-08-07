import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from '../reducers/app';
import App from './App';


export class Root extends Component {
  constructor (props) {
    super(props);
    this.store = createStore(app);
  }

  render () {
    return (
      <Provider store={this.store}>
        {() => <App {...this.props} />}
      </Provider>
    );
  }
}

