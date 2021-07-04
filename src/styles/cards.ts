import styled from "styled-components";

export const DottedTitle = styled.h2`
  font-weight: 500;
  padding-bottom: 0.3rem;
  border-bottom-style: dashed;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  display: inline;
  border-bottom-width: 2px;
`;

export const LinkWrapper = styled.a`
  margin: 2rem 2rem 2rem 0;
  text-decoration: none;
  color: inherit;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 200px;
  border-radius: 5px;
  box-shadow: 4px 4px #2a554b;
  padding: 2rem;
  padding-bottom: 1rem;
  .desc {
    margin: 1rem 0;
    overflow: auto;
    p {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
    }
    .right {
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 0.4rem;
  }
  p {
    font-family: "Roboto Mono", sans-serif;
    font-weight: 400;
  }
`;

export const DropDown = styled.select`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: gray;
  background-color: transparent;
  border: 1px solid #132521;
  border-radius: 5px;
  padding: 0.7rem 2rem;
  align-self: flex-start;
  /* text-transform: capitalize; */
  &:hover,
  &:focus {
    background-color: #2a554b;
    color: #fff;
    transition: all 0.3s;
  }
  option {
    background-color: #2a554b;
    transition: all 0.2s;
    &:hover,
    &:focus {
      background-color: #132521;
    }
  }
`;
