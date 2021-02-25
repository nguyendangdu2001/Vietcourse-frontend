import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import styled from "styled-components";
import { useStudents } from "../../../../common/hooks";
import UserRow from "./UserRow";

const UserTable = ({ className }) => {
  const [users] = useStudents();
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  return (
    <Grid container item className={className}>
      <Grid container justify="space-between" alignItems="center">
        <h1>Học viên</h1>
      </Grid>

      <Grid
        className="courseEditTable"
        direction="column"
        justify="space-between"
        alignItems="center"
        container
        item
      >
        {users && users.map((user) => <UserRow {...user} key={user._id} />)}
      </Grid>
      <Grid container item justify="center">
        <Pagination
          count={totalPage}
          page={page}
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default styled(UserTable)`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  h1 {
    font-size: 2em;
  }
  .courseEditTable {
    padding: 32px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.14);
    row-gap: 8px;
  }
`;
