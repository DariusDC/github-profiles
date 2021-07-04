import axios from "axios";

const getUser = (user: string) =>
  axios.get(`https://api.github.com/users/${user}`);

export default getUser;
