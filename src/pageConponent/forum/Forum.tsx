import { Container, Grid } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/reducer";
import { User } from "../../types/user";
import CreatePost from "./CreatePost";
import PostSection from "./PostSection";

interface Props {
  className: string | undefined;
}

const Forum: FC<Props> = ({ className }) => {
  const userStatus = useSelector<AppStateType, User>(({ userStatus }) => userStatus);
  return (
    <Container maxWidth="lg" className={className}>
      <h1 className="forum__header">Forum</h1>
      <Grid container>
        <Grid container item xl={7}>
          {userStatus.auth && <CreatePost user={userStatus.userInfo} />}
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item xl={7}>
          <PostSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default styled(Forum)`
  padding: 0;
  min-height: 100vh;
  .forum {
    &__header: {
      font-size: 3em;
    }
  }
`;
