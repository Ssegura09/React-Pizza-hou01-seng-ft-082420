import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm />
        <PizzaList />
        <PizzaIng name={test} />
      </Fragment>
    );
  }
}

export default App;
