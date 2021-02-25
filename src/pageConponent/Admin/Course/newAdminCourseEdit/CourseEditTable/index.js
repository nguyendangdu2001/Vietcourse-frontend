import { Button, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Pagination } from "@material-ui/lab";
import Axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { nodeApiLink } from "../../../../../config/Api/NodeServerLink";
import AddCoursePopUp from "../../components/AddCoursePopup/AddCoursePopUp";
import CourseDataRow from "./CourseDataRow";

const CourseEditTable = ({ className }) => {
  const [courses, setCourses] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [courseSelected, setCourseSelected] = useState();
  const [page, setPage] = useState(1);
  const updateCourseHandler = (newCourse) => {
    const newCourses = courses.map((course) => {
      if (course._id === newCourse._id) return newCourse;
      else return course;
    });
    setCourses(newCourses);
    setCourseSelected(null);
  };
  const deleteHandler = async (id) => {
    try {
      // await Axios.delete(`${nodeApiLink}/api/courses`, { id: id });
      setCourses((prev) => {
        const newCourses = [...prev].filter((value) => {
          return value._id !== id;
        });
        return newCourses;
      });
    } catch (error) {}
  };
  const selectHandler = (course) => {
    setCourseSelected(course);
  };
  const openNewCourseEditPopup = () => {
    setCourseSelected({ title: "", price: 0, subject: "", lecture: "", detail: [], pic: "" });
  };
  const closeEditPopupHandler = () => {
    setCourseSelected(null);
  };
  useEffect(() => {
    const axiosCancelSource = Axios.CancelToken.source();
    const fetchCourses = async () => {
      const { data } = await Axios.get(`${nodeApiLink}/api/courses?page=${page}`, {
        cancelToken: axiosCancelSource.token,
      });
      setCourses(data.listCourse);
      setTotalPage(Number.parseInt(data.page));
    };
    fetchCourses();
    return () => {
      axiosCancelSource.cancel("page change or compoent unmount");
    };
  }, [page]);
  // useEffect(() => {
  //     console.log(courses);
  //     return () => {};
  // }, [courses]);
  // useEffect(() => {
  //     console.log(courseSelected);
  //     return () => {};
  // }, [courseSelected]);
  // const data = {
  //     id: "sdfsdfsf",
  //     name: "sfsdf",
  //     lecture: "sdfdsf",
  //     numOfStudent: "123233",
  //     lastDayModified: "sfsdf",
  // };
  return (
    <>
      <Grid item className={className}>
        <Grid container justify="space-between" alignItems="center">
          <h1>Khóa học</h1>
          <Button variant="contained" color="primary" onClick={() => openNewCourseEditPopup()}>
            <Add /> Thêm
          </Button>
        </Grid>

        <Grid
          className="courseEditTable"
          direction="column"
          justify="space-between"
          alignItems="center"
          container
          item
        >
          {courses.map((course) => (
            <CourseDataRow
              {...course}
              key={course._id}
              deleteHandler={deleteHandler}
              selectHandler={() => selectHandler(course)}
            />
          ))}
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
      <AnimatePresence>
        {courseSelected && (
          <AddCoursePopUp
            course={courseSelected}
            updateCourseHandler={updateCourseHandler}
            closeEditPopupHandler={closeEditPopupHandler}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default styled(CourseEditTable)`
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
