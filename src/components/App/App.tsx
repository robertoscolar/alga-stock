import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container';
import Table from '../../shared/Table';
import { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';

const headers: TableHeader[] = [
  { key:'name', value: 'Product'},
  { key:'price', value: 'Price', right: true},
  { key:'stock', value: 'Available Stock', right: true}
]

function App() {

  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>    
        <Table
            headers={headers}
            data={Products}
        />
      </Container>
    </div>
  );
}

export default App;
