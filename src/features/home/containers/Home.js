import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { findMe } from "../../users/actions/usersActionCreators";
import Header from "../../header/components/Header";
import Posts from "../../posts/containers/Posts";
import Settings from "../../settings/components/Settings";
import RootUser from "../../users/components/RootUser";

const Main = styled.main`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  transition: background-color 0.2s ease;
  background-color: ${(props) => props.theme.backgroundPrimary};
  transition: ${(props) => props.theme.backgroundColorTransition};
`;

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 32px 0;
  @media (min-width: 768px) {
    padding: 64px 24px;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.users.me);

  React.useEffect(() => {
    if (me.email === "" && localStorage.getItem("token") !== null) {
      dispatch(findMe());
    }
  }, [me.email, dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/settings" component={Settings} />
            <Route path="/:username" component={RootUser} />
          </Switch>
        </Container>
      </Main>
    </>
  );
};

export default Home;
