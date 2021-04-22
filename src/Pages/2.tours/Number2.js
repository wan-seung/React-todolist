import React from 'react';
import styled from 'styled-components';
import List from './Components/List';
import { data } from './data';

function Number2() {
  return (
    <PageWrapper>
      <HeadLine>Our Tours</HeadLine>
      <List />
    </PageWrapper>
  );
}

export default Number2;

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #f1f5f9;
`;

const HeadLine = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  margin-top: 5.5%;
  letter-spacing: 2px;
`;
