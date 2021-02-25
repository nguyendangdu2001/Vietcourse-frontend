import "../style/formDetail.css";
import "./style/studentpage.css";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { FormControl, Grid, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import UserTable from "./UserTable/UserTable";
export const AdminUsers = ({ className }) => {
  const [keyWord, setKeyWord] = useState("");
  return (
    <Grid container className={className}>
      <Grid container item>
        <Grid container justify="space-between" style={{ marginTop: 30, marginBottom: 30 }}>
          <FormControl>
            <Grid container>
              <Grid item>
                <TextField value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
              </Grid>
              <Grid item>
                <Search />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
      <UserTable />
    </Grid>
  );
};
