/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0 1rem;
  border: 2px solid #68d391;
  border-radius: 5px;
`;

function Message(props) {
  const { text } = props;
  return (
    <MessageContainer>
      <p>{text}</p>
    </MessageContainer>
  );
}

export default Message;