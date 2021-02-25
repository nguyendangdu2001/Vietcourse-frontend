import { Button, Grid, List } from "@material-ui/core";
import React from "react";
import CourseDetail from "./CourseDetail";

const DetailEditer = ({ details = [], updateDetails }) => {
  const addDetail = () => {
    updateDetails([...details, { chapter: [], totalchapter: 0, totalTime: "0:00:00", title: "" }]);
  };
  const deleteDetail = (index) => {
    return () => {
      const newDetail = [...details];
      newDetail.splice(index, 1);
      updateDetails(newDetail);
    };
  };
  const updateDetail = (index) => {
    return (newDetail) => {
      updateDetails((prev) => {
        const newDetails = [...prev];
        newDetails[index] = newDetail;
        return newDetails;
      });
    };
  };
  return (
    <Grid container>
      <Grid container justify="space-between">
        <div>Chi tiết</div>
        <Button variant="contained" onClick={addDetail}>
          Thêm
        </Button>
      </Grid>
      <Grid item xs={12}>
        <List component="div">
          {details.map((detail, index) => (
            <CourseDetail
              key={index}
              detail={detail}
              updateDetail={updateDetail(index)}
              deleteDetail={deleteDetail(index)}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default DetailEditer;
