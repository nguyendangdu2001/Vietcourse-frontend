import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const UserRow = ({ _id, name, className }) => {
  return (
    <Grid item container className={className}>
      <div className="userRow__id">{_id}</div>
      <div className="userRow__name">{name}</div>
    </Grid>
  );
};

export default styled(UserRow)`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;
  height: 60px;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
  div {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
  }
  .userRow__id {
    width: 200px;
  }
  .userRow__name {
    width: 30%;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 1.2em;
  }
`;
