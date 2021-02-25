import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";
import subjectTemplate from "../../../../../config/common/subjectConfig";
import DetailEditer from "./ChapterEdditer/DetailEditer";
import Axios from "axios";
import { useDropzone } from "react-dropzone";
import { nodeApiLink } from "../../../../../config/Api/NodeServerLink";
import { motion } from "framer-motion";
import { useSubjects } from "../../../../../common/hooks";
export function AddCoursePopUp({ className, course, updateCourseHandler, closeEditPopupHandler }) {
  const { _id, title, price, subject, lecture, detail, pic } = course;
  const [subjects] = useSubjects();
  const [picEdit, setPicEdit] = useState(pic || "");
  const [titleEdit, setTitleEdit] = useState(title || "");
  const [priceEdit, setPriceEdit] = useState(price || "");
  const [subjectEdit, setSubjectEdit] = useState(subject || "");
  const [lecturerEdit, setLecturerEdit] = useState(lecture || "");
  const [detailsEdit, setDetailsEdit] = useState(detail || []);
  const validateStatus = !titleEdit || !priceEdit || !subjectEdit || !lecturerEdit || !detailsEdit;
  console.log(validateStatus);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      // picDeleteLink &&
      //     Axios.post(
      //         "https://api.imgbb.com/1/upload?key=79c38b16d0f187cf9c996441006e302b",
      //         form,
      //         { headers: { "Content-Type": "multipart/form-data" }, withCredentials: false }
      //     );
      const form = new FormData();
      form.append("image", acceptedFiles[0]);
      const {
        data,
      } = await Axios.post(
        "https://api.imgbb.com/1/upload?key=79c38b16d0f187cf9c996441006e302b",
        form,
        { headers: { "Content-Type": "multipart/form-data" }, withCredentials: false }
      );
      setPicEdit(data.data.display_url);
    },
  });
  const submitHandlder = async (e) => {
    e.preventDefault();
    const EditedCourseField = {
      title: titleEdit,
      price: priceEdit,
      subject: subjectEdit,
      lecture: lecturerEdit,
      detail: detailsEdit,
      pic: picEdit,
    };
    if (_id) {
      const { data } = await Axios.put(`${nodeApiLink}/api/courses/${_id}`, {
        course: EditedCourseField,
      });
      updateCourseHandler(data);
    } else {
      const { data } = await Axios.post(`${nodeApiLink}/api/courses/`, {
        ...EditedCourseField,
      });
      updateCourseHandler(data);
    }
  };
  return (
    <>
      <div
        style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: 0 }}
        onClick={closeEditPopupHandler}
      ></div>
      <Grid
        component={motion.form}
        container
        className={className}
        onSubmit={submitHandlder}
        spacing={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.25 }}
        style={{ pointerEvents: "auto" }}
      >
        <Grid item xs={3}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <img src={picEdit} alt={`${title}`} />
          </div>
        </Grid>
        <Grid item container xs={9} style={{ rowGap: 20 }}>
          <Grid container style={{ columnGap: 16 }}>
            <Grid item xs>
              <TextField
                label="Tên khóa học"
                value={titleEdit}
                onChange={(e) => {
                  setTitleEdit(e.target.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs>
              <TextField
                label="Tên Giảng Viên"
                value={lecturerEdit}
                onChange={(e) => {
                  setLecturerEdit(e.target.value);
                }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container style={{ columnGap: 16 }}>
            <Grid item xs>
              <TextField
                label="Giá Tiền"
                type="number"
                value={priceEdit}
                onChange={(e) => {
                  setPriceEdit(e.target.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs>
              <FormControl fullWidth>
                <InputLabel id="subjectLabel">Tên Lĩnh Vực</InputLabel>
                <Select
                  labelId="subjectLabel"
                  value={subjectEdit}
                  onChange={(e) => {
                    setSubjectEdit(e.target.value);
                  }}
                  fullWidth
                >
                  {subjects &&
                    subjects.map(({ _id, name }) => (
                      <MenuItem key={_id} value={_id}>
                        {name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <DetailEditer details={detailsEdit} updateDetails={setDetailsEdit} />
          <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              height: 700,
              width: "100%",
              menubar: "insert",
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
                "image",
              ],
              toolbar: `undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | \
             image |`,
            }}
          />
        </Grid>
        <Grid container justify="flex-end">
          <Button size="large" variant="contained" type="submit" disabled={validateStatus}>
            Xác nhận
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default styled(AddCoursePopUp)`
  width: 1300px;
  padding: 20px;
  height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  .addCourseForm__imageUpload {
    width: 128px;
    height: 128px;
    display: flex;
  }
`;
