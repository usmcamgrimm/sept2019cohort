import React from 'react';
import logo from './logo.svg';
import NavBar from './NavBar';
import Button from './Button';
import './App.css';

const navTabs = ["Home", "About", "Contact", "Projects"];

function App() {
  return (
    
    <div className="App">
      <NavBar navTabs={navTabs}/>
      <Button></Button>
    </div>
  );
}

export default App;