/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  min-height: 10vh;
`;

function Footer() {
  return (
    <Container>
      <p>
        by <a href="https://www.instagram.com/farhanz29/">farhan</a> &copy; 2023
      </p>
    </Container>
  );
}

export default Footer;