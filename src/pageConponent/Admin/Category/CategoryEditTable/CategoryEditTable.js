import { Button, Grid, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Pagination } from "@material-ui/lab";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { nodeApiLink } from "../../../../config/Api/NodeServerLink";
import CategoryRow from "./CategoryRow";

const CategoryEditTable = ({ className }) => {
  const [categories, setCategories] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [page, setPage] = useState(1);

  const addCategory = async (name) => {
    try {
      const { data } = await Axios.post(`${nodeApiLink}/api/categories`, { name });
      setCategories((prev) => [...prev, data]);
      setCategoryName("");
    } catch (error) {}
  };
  const updateCategoryHandler = (newCourse) => {
    const newCourses = categories.map((course) => {
      if (course._id === newCourse._id) return newCourse;
      else return course;
    });
    setCategories(newCourses);
  };
  const deleteHandler = async (id) => {
    try {
      await Axios.delete(`${nodeApiLink}/api/categories/${id}`);
      setCategories((prev) => {
        const newCategories = [...prev].filter((category) => {
          return category._id !== id;
        });
        return newCategories;
      });
    } catch (error) {}
  };
  useEffect(() => {
    const axiosCancelSource = Axios.CancelToken.source();
    const fetchCourses = async () => {
      const { data } = await Axios.get(`${nodeApiLink}/api/categories`, {
        cancelToken: axiosCancelSource.token,
      });
      setCategories(data);
    };
    fetchCourses();
    return () => {
      axiosCancelSource.cancel("page change or compoent unmount");
    };
  }, [page]);
  return (
    <>
      <Grid item className={className}>
        <Grid container justify="space-between" alignItems="center">
          <h1>Danh mục</h1>
          <div>
            <TextField
              size="medium"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
            <Button variant="contained" color="primary" onClick={() => addCategory(categoryName)}>
              <Add /> Thêm
            </Button>
          </div>
        </Grid>

        <Grid
          className="courseEditTable"
          direction="column"
          justify="space-between"
          alignItems="center"
          container
          item
        >
          {categories.map((category) => (
            <CategoryRow {...category} key={category._id} deleteHandler={deleteHandler} />
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
    </>
  );
};

export default styled(CategoryEditTable)`
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
