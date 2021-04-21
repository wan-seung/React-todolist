import React from 'react';
import styled from 'styled-components';

function List({ people }) {
  console.log('얘 데이터' + people);
  return (
    <>
      <UserListWrapper>
        {people.map(people => {
          const { id, name, age, image } = people;
          return (
            <UserList key={id}>
              <UserImg src={image} alt="userImage" />
              <UserInf>
                <UserName>{name}</UserName>
                <UserAge>{age} years</UserAge>
              </UserInf>
            </UserList>
          );
        })}
      </UserListWrapper>
    </>
  );
}

export default List;

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
