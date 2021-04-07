import React, { useState } from 'react';
import styled from 'styled-components';
import Data from './Data';

function PageNum1() {
  const [state, setstate] = useState(Data);
  console.log(Data);
  return (
    <PageWrapper>
      <Form>
        <Headline>5 Birthday Today</Headline>
        <UserListWrapper>
          {Data &&
            Data.map((el, key) => {
              return (
                <UserList key={key}>
                  <UserImg src={el.image} alt={el.id} />
                  <UserInf>
                    <UserName>{el.name}</UserName>
                    <UserAge>{el.age} years</UserAge>
                  </UserInf>
                </UserList>
              );
            })}
        </UserListWrapper>
        <FooterBtn>Clear All</FooterBtn>
      </Form>
    </PageWrapper>
  );
}

export default PageNum1;

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

const UserListWrapper = styled.ul`
  padding: 0;
`;

const UserList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-bottom: 20px;
`;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const UserInf = styled.div`
  height: 100%;
  margin: 0px 10px;
`;

const UserName = styled.b`
  font-size: 20px;
`;

const UserAge = styled.p`
  margin: 10px 0 0 0;
  font-size: 20px;
  color: #617d99;
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
