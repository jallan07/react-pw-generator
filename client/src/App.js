import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh'
      }}
    >
      <div style={{ background: 'rgba(255, 255, 255, 0.098)' }} className="p-5">
        <Header />
        <PasswordGenerator />
      </div>
    </Container>
  );
}

export default App;
