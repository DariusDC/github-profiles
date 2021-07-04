import React, { ComponentElement } from "react";
import styled from "styled-components";
import { DottedTitle } from "../styles/cards";

const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  padding: 1rem 2rem;
  margin-top: -50px;
  box-shadow: 10px 10px #2a554b;
  div {
    margin-top: 3rem;
  }
  @media (max-width: 800px) {
    margin-bottom: 3rem;
    margin-top: 0;
    &:nth-child(1) {
      margin-top: -50px;
    }
  }
`;

interface ChartCardProps {
  Content: ComponentElement<any, any>;
  title: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ Content, title }) => {
  return (
    <Card>
      <DottedTitle>{title}</DottedTitle>
      <div>{Content}</div>
    </Card>
  );
};

export default ChartCard;
