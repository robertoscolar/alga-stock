import React, { useState } from 'react';
import Header from '../Header';
import './App.css';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';


function App() {
  const [street, setStreet] = useState('');

  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>    
        <Button  
          onClick={() => window.alert('Testando onClick')}
        >
          Alert
        </Button>
        <Input
          label="Street"
          placeholder="hauhuahdsuhas"
          value={street}
          onChange={ e => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
