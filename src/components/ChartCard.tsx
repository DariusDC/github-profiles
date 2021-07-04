import React, { ComponentElement } from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  padding: 1rem 2rem;
  margin-top: -50px;
  box-shadow: 10px 10px #2a554b;
  h2 {
    font-weight: 500;
    padding-bottom: 0.3rem;
    border-bottom-style: dashed;
    border-bottom-color: rgba(0, 0, 0, 0.3);
    display: inline;
    border-bottom-width: 2px;
  }
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
      <h2>{title}</h2>
      <div>{Content}</div>
    </Card>
  );
};

export default ChartCard;
