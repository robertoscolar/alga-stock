import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container';
import ProductsCRUD from '../Products/ProductsCRUD';

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>    
        <ProductsCRUD/>
      </Container>
    </div>
  );
}

export default App;
