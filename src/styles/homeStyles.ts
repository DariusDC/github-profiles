import styled from "styled-components";

export const Header = styled.h1`
  font-size: 36px;
  margin: 3rem 0;
  text-align: center;
  max-width: 90%;
  font-weight: 300;
  color: #f4f6f8;
`;

export const HomeSection = styled.section`
  background-color: #1d2125;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-bottom: 10rem;
  align-items: center;
`;

export const Searchbar = styled.input`
  background-color: #444e57;
  border: none;
  width: 90%;
  max-width: 450px;
  padding: 1rem 2rem;
  border-radius: 3px;
  box-shadow: 5px 10px #3f9984;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  font-family: "Roboto Mono";
  font-weight: 300;
`;
