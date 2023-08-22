/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
`;

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <h1>Notes App</h1>
    </Container>
  );
}

export default Header;