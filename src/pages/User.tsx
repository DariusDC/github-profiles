import React, { useEffect, useState } from "react";
import getUser from "../utils/getUser";
import { RouteComponentProps } from "react-router-dom";
import moment from "moment";
import UserCard from "../components/UserCard";
import ChartCart from "../components/ChartCard";
import axios from "axios";
import MostStarredChart from "../components/charts/MostStarredChart";
import TopLanguagesChart from "../components/charts/TopLanguagesChart";
import { UserType } from "./../types/userType";
import Projects from "./../components/users/Projects";
import {
  Avatar,
  CardsSection,
  ChartsSection,
  Content,
  Heading,
  JoinDate,
  Tag,
} from "../styles/userStyles";
import { LiteRepo, RepoType } from "../types/repoType";

interface RouteType {
  username: string;
}

const User = ({ match }: RouteComponentProps): any => {
  const [userDetails, setUserDetails] = useState<UserType | null>(null);
  const [userRepo, setUserRepo] = useState<RepoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchUser = async () => {
    try {
      const userData = await getUser((match.params as RouteType).username);
      setUserDetails(userData.data);
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  const fetchRepo = async () => {
    try {
      setIsLoading(true);
      const userRepo = await axios.get(
        `https://api.github.com/users/${
          (match?.params as RouteType).username
        }/repos`
      );
      setUserRepo(userRepo.data);
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchRepo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || userRepo.length === 0) return <div>Loading...</div>;

  if (isError) return <div>An error occured....</div>;

  if (!isLoading && userDetails?.login && userRepo.length > 0)
    return (
      <>
        <Heading>
          <Avatar src={userDetails.avatar_url} alt="AVATAR" />
          <Tag>@{userDetails.login}</Tag>
          <JoinDate>
            Joined at {moment(userDetails.created_at).format("Do MMM YYYY")}
          </JoinDate>
          <CardsSection>
            <UserCard number={userDetails.public_repos} text="Repositories" />
            <UserCard number={userDetails.followers} text="followers" />
            <UserCard number={userDetails.following} text="following" />
          </CardsSection>
        </Heading>
        <Content>
          <ChartsSection>
            <ChartCart
              title="Most starred"
              Content={<MostStarredChart repo={userRepo} />}
            />
            <div style={{ minWidth: "3rem" }}></div>
            <ChartCart
              title="Top Languages"
              Content={<TopLanguagesChart repo={userRepo} />}
            />
          </ChartsSection>
          <Projects
            repo={userRepo.map((r) => {
              return {
                description: r.description,
                title: r.name,
                forks: r.forks_count,
                size: r.size,
                stars: r.stargazers_count,
                url: r.html_url,
              } as LiteRepo;
            })}
          />
        </Content>
      </>
    );
};

export default User;
