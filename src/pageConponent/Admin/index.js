import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminUsers } from "./User/AdminUsers";
import Lecture from "./Lecturer/Lecture";
import NewAdminCourseEdit from "./Course/newAdminCourseEdit/NewAdminCourseEdit";
import Dashboard from "./Dashboard/Dashboard";
import { Grid } from "@material-ui/core";
import CategoryEdit from "./Category/CategoryEdit";

export const Admin = ({ match }) => {
  const role = useSelector(({ userStatus }) => userStatus.userInfo && userStatus.userInfo.roles);
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname.startsWith("/admin"))
      !role.includes("admin") && history.push("/");
    return () => {};
  }, [role, history]);
  return (
    <Grid container justify="center" style={{ paddingLeft: 80 }}>
      <Switch>
        <Route path={`${match.path}/users`} component={AdminUsers} />
        <Route path={`${match.path}/lecturers`} component={Lecture} />
        <Route path={`${match.path}/courses`} component={NewAdminCourseEdit} />
        <Route path={`${match.path}/categories`} component={CategoryEdit} />
        <Route exact path={`${match.path}`} component={Dashboard} />
      </Switch>
    </Grid>
  );
};
export default Admin;
