import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 2rem 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #24292e;
  max-width: 10rem;
  max-height: 8rem;
  border-radius: 4px;
  padding: 1rem 2rem;
  h5 {
    font-weight: 400;
    font-size: 1.7rem;
  }
  p {
    font-size: 1rem;
    font-family: "Roboto Mono";
    text-transform: uppercase;
    font-weight: 400;
    color: #3f9984;
  }
  @media (max-width: 600px) {
    padding: 1rem 2rem;
    h5 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

interface UserCardProps {
  number: number;
  text: string;
}

const UserCard: React.FC<UserCardProps> = ({ number, text }) => {
  return (
    <Card>
      <h5>{number}</h5>
      <p>{text}</p>
    </Card>
  );
};

export default UserCard;
