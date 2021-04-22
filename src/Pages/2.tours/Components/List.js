import React from 'react';
import styled from 'styled-components';
import { data } from '../data';

function List() {
  console.log(data);
  const { id, image, subject, cost, description } = data[0];
  return (
    <ItemWrapper>
      <Item>
        <ItemImg src={image} alt="" />
        <TextWrapper>
          <SubjectWrapper>{subject}</SubjectWrapper>
          <CostWrapper>${cost}</CostWrapper>
        </TextWrapper>
        <DescriptionWrapper>
          {description}
          <DescriptionBtn>Read More</DescriptionBtn>
        </DescriptionWrapper>
        <Button>Not Interested</Button>
      </Item>
    </ItemWrapper>
  );
}

export default List;

const ItemWrapper = styled.section`
  width: 43%;
  height: 30%;
  margin-top: 5%;
`;

const Item = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid none;
  border-radius: 20px;
  background-color: white;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 400px;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 20px 40px 10px;
`;

const SubjectWrapper = styled.h3`
  margin: 0px;
`;

const CostWrapper = styled.div`
  padding: 5px 10px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #49a6e9;
  background-color: #eaf8ff;
`;

const DescriptionWrapper = styled.div`
  margin: 20px 40px;
  font-size: 1.2rem;
  color: gray;
`;

const DescriptionBtn = styled.div`
  color: #49a6e9;
  cursor: pointer;
`;

const Button = styled.button`
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  font-size: 1.5rem;
  background-color: white;
  width: 35%;
  padding: 5px 10px;
`;
