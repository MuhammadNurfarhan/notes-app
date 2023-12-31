/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import HomePage from './pages/Home';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path='/add' element={<AddPage />} />
          <Route path='/edit/:id' element={<EditPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
