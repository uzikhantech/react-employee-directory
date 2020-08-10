import React from 'react';
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";

import './App.css';

function App() {
  return (
    <Wrapper>
        <Jumbotron/>
        <Container/>
    </Wrapper>
  );
}

export default App;

