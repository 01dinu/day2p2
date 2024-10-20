import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import  './index.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      
      <Header />
      <Container />
      
     
    </div>
      
    
  </Router>
  );
};

export default App;