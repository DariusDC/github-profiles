import styled from "styled-components";

export const Heading = styled.header`
  padding-top: 5rem;
  background-color: #1d2125;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 130px;
  border-radius: 50%;
  border: 8px solid #52d1b3;
  margin-bottom: 1rem;
`;

export const Tag = styled.h3`
  font-family: "Roboto Mono";
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #3f9984;
`;

export const JoinDate = styled.p``;

export const CardsSection = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 300px;
  margin: 2rem auto;
  margin-bottom: 5rem;
`;

export const Content = styled.section`
  background-color: #f6f8fa;
`;

export const ChartsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 5rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
