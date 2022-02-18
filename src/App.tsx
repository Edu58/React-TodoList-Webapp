import React from 'react';
import './App.css';
import InputDiv from './Components/InputDiv';
import Navbar from './Components/Navbar';
import Tasks from './Components/Tasks';

function App() {
  return (
    <>
    <Navbar />
      <InputDiv />
      <Tasks />
    </>
  )
}

export default App;