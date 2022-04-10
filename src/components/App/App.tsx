import React from 'react';
import Header from '../Header';
import './App.css';
import Button from '../../shared/Button';
import Container from '../../shared/Container';


function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>    
        <Button  
          onClick={() => window.alert('Testando onClick')}
        >
          Alert
        </Button>
      </Container>
    </div>
  );
}

export default App;
