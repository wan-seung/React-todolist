import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';
import List from './List';

function Number1() {
  const [people, setPeople] = useState(data);

  return (
    <PageWrapper>
      <Form>
        <Headline>{people.length} Birthday Today</Headline>
        <List people={people} />
        <FooterBtn
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </FooterBtn>
      </Form>
    </PageWrapper>
  );
}

export default Number1;

const PageWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f28ab2;
`;

const Form = styled.section`
  width: 27%;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

const Headline = styled.h3`
  color: #112a43;
  font-size: 36px;
  font-weight: 500;
  margin: 30px 0 20px 0;
`;

const FooterBtn = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #f28ab2;
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 30px;
`;
