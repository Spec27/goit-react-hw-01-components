import { Container } from "./Container";

import { Profile } from "./Profile";
import user from "../data/user.json";

import { Statistics } from "./Statistics";
import data from '../data/data.json';


export const App = () => {
  return (
    <Container>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};
