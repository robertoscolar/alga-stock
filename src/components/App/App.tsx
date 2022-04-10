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
        <ul>
          {
            ['Daniel', 'Bruno', 'Roberto'].map((name, index) => {
              return <li key={index}>
                {name}
              </li>
            }) 
          }
        </ul>
      </Container>
    </div>
  );
}

export default App;
