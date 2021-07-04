import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Header, HomeSection, Searchbar } from "../styles/homeStyles";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");
  const history = useHistory();

  return (
    <HomeSection>
      <FaGithub size={60} color="#52d1b3" />
      <Header>Start searching your github profile here.</Header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push({ pathname: `/user/${user}` });
        }}
      >
        <Searchbar value={user} onChange={(e) => setUser(e.target.value)} />
      </form>
    </HomeSection>
  );
};

export default Home;
