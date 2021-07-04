import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { DottedTitle, DropDown } from "../../styles/cards";
import { LiteRepo, LiteRepoType } from "../../types/repoType";
import ProjectCard from "./ProjectCard";
import FlipMove from "react-flip-move";

const Layout = styled.div`
  width: 90%;
  margin: 1rem auto 2rem;
  max-width: 1400px;
`;

const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  p {
    margin: 0 1rem;
  }
`;

const Cards = styled.div`
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem 2rem;
    @media (max-width: 976px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 670px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

interface ProjectsProps {
  repo: LiteRepo[];
}

const Projects: React.FC<ProjectsProps> = ({ repo }) => {
  const [repos, setRepos] = useState<LiteRepo[]>([]);
  const [property, setProperty] = useState<string>("");

  const sortBy = (property: LiteRepoType) => {
    // Sorting the repos based on the given property
    setRepos(
      repo
        .sort((a, b) => {
          const x = a[property];
          const y = b[property];
          if (x < y) return 1;
          else if (x > y) return -1;
          else return 0;
        })
        .slice(0, 8)
    );
  };

  const handlePropChange = (e: any) => {
    setProperty(e.target.value);
  };

  useEffect(() => {
    // By default we sort by starts
    // All we need is tile, desc, start, forks and size
    sortBy("stars");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sortBy(property as LiteRepoType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [property]);

  return (
    <Layout>
      <ProjectsHeader>
        <DottedTitle>Top Projects</DottedTitle>
        <p>by</p>
        <DropDown onChange={handlePropChange}>
          <option>stars</option>
          <option>forks</option>
          <option>size</option>
        </DropDown>
      </ProjectsHeader>
      <Cards>
        <FlipMove className="cards">
          {repos.map((rep, _) => (
            <div className="project-card" key={rep.url}>
              <ProjectCard
                description={rep.description}
                forks={rep.forks}
                size={rep.size}
                stars={rep.stars}
                title={rep.title}
                url={rep.url}
              />
            </div>
          ))}
        </FlipMove>
      </Cards>
    </Layout>
  );
};

export default Projects;
