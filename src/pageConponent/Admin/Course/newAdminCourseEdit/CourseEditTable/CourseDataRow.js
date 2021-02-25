import { Button, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const CourseDataRow = ({
  _id,
  title,
  lecture,
  numOfStudent,
  lastModified,
  deleteHandler,
  selectHandler,
  className,
}) => {
  const getDate = (date) => {
    return new Date(lastModified).toISOString().split("T")[0].split("-").reverse().join("-");
  };
  return (
    <Grid item container className={className} onClick={selectHandler}>
      <div className="courseDataRow__id">{_id}</div>
      <div className="courseDataRow__name">{title}</div>
      <div className="courseDataRow__lecture">Giảng viên: {lecture}</div>
      <div className="courseDataRow__numOfStudent">Người học: {numOfStudent}</div>
      <div className="courseDataRow__lastDayModified">Ngày sửa đổi: {getDate(lastModified)}</div>
      <Button
        color="primary"
        outline="true"
        onClick={(e) => {
          e.stopPropagation();
          deleteHandler(_id);
        }}
        style={{ marginLeft: "auto" }}
      >
        Xóa
      </Button>
    </Grid>
  );
};

export default styled(CourseDataRow)`
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
  .courseDataRow__id {
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
