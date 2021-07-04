import React from "react";
import { GoRepo, GoRepoForked, GoStar } from "react-icons/all";
import { IconType } from "react-icons/lib";
import styled from "styled-components";
import { Card, Head, LinkWrapper } from "../../styles/cards";

const InfoCardStyle = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
  .icon {
    margin-right: 0.2rem;
  }
  p {
    font-size: 14px;
  }
`;

interface InfoCardProps {
  text: number;
  Icon: IconType;
}

const InfoIcon: React.FC<InfoCardProps> = ({ Icon, text }) => {
  return (
    <InfoCardStyle>
      <Icon className="icon" />
      <p>{text}</p>
    </InfoCardStyle>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  stars: number;
  forks: number;
  size: number;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  forks,
  size,
  stars,
  title,
  url,
}) => {
  return (
    <LinkWrapper href={url} target="_blank" rel="noreferrer">
      <Card>
        <Head>
          <GoRepo className="icon" />
          <p>{title}</p>
        </Head>
        <div className="desc">
          <p className="desc__p">
            {description === null
              ? "No description"
              : description.slice(0, 100)}
          </p>
        </div>
        <div className="footer">
          <div className="left">
            <InfoIcon Icon={GoStar} text={stars} />
            <InfoIcon Icon={GoRepoForked} text={forks} />
          </div>
          <div className="right">
            <p>{new Intl.NumberFormat().format(size)} KB</p>
          </div>
        </div>
      </Card>
    </LinkWrapper>
  );
};

export default ProjectCard;
