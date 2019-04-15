import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { findMe } from "../../users/actions/usersActionCreators";
import Header from "../../header/components/Header";
import Posts from "../../posts/containers/Posts";
import Settings from "../../settings/components/Settings";
import RootUser from "../../users/components/RootUser";

const Main = styled.main`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 32px 0;
  @media (min-width: 768px) {
    padding: 64px 24px;
  }
`;

class Home extends React.Component {
  componentDidMount = () => {
    const { me, findMe } = this.props;

    if (me.email === "" && localStorage.getItem("token") !== null) {
      findMe();
    }
  };

  render() {
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
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  { findMe }
)(Home);
