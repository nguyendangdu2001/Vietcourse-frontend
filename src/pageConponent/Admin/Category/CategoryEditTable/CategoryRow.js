import { Button, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const CategoryRow = ({ _id, name, deleteHandler, className }) => {
  return (
    <Grid item container className={className}>
      <div className="categoryRow__id">{name}</div>
      <Button
        color="primary"
        outline="true"
        onClick={() => deleteHandler(_id)}
        style={{ marginLeft: "auto" }}
      >
        Xóa
      </Button>
    </Grid>
  );
};

export default styled(CategoryRow)`
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
  .categoryRow__id {
    width: 200px;
  }
  .courseDataRow__name {
    width: 30%;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 1.2em;
  }
  .courseDataRow__lecture {
    width: 270px;
  }
`;
