import { Button, Grid, List, ListItem, styled, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CourseChapter from "./CourseChapter";

const CourseDetail = ({ detail, updateDetail, deleteDetail }) => {
  const { title, chapter = [], totalchapter, totalTime } = detail;
  const [titleEdit, setTitleEdit] = useState(title);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const MyButton = styled(Button)({
    color: "white",
  });
  const getTotalTime = (chapters) => {
    let TotalSeconds = chapters.reduce((total, chapter) => {
      const [min, second] = chapter.time.split(":");
      return total + Number(min) * 60 + Number(second);
    }, 0);
    const hours = Math.floor(TotalSeconds / 3600);
    const minutes = Math.floor((TotalSeconds % 3600) / 60);
    const seconds = TotalSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
  };
  const updateChapter = (index) => {
    return (newChapter) => {
      const newChapters = [...detail.chapter];
      newChapters[index] = newChapter;
      updateDetail({
        ...detail,
        chapter: newChapters,
        totalChapter: newChapters.length,
        totalTime: getTotalTime(newChapters),
      });
    };
  };
  const deleteChapter = (index) => {
    return () => {
      const newChapters = [...detail.chapter];
      newChapters.splice(index, 1);
      updateDetail({ ...detail, chapter: newChapters, totalChapter: newChapters.length });
    };
  };
  const addChapter = (e) => {
    e.stopPropagation();
    updateDetail({
      ...detail,
      chapter: [...detail.chapter, { name: "", time: "00:00" }],
      totalChapter: chapter.length + 1,
    });
    setOpen(true);
  };
  const cancelHandler = () => {
    if (!title) return deleteDetail();
    return setEdit(false);
  };
  useEffect(() => {
    !title && setEdit(true);
    return () => {};
  }, [title]);
  return (
    <>
      <ListItem
        button
        style={{ backgroundColor: "#00a8e8", color: "white" }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Grid container justify="space-between" alignItems="center" spacing={1}>
          <Grid container item justify="space-between" alignItems="center" xs={8}>
            <Grid item container xs={6}>
              {edit ? (
                <TextField
                  value={titleEdit}
                  onChange={(e) => {
                    setTitleEdit(e.target.value);
                  }}
                  fullWidth
                  autoFocus
                />
              ) : (
                <div>{title}</div>
              )}
            </Grid>

            <span>{totalchapter} Bài giảng</span>
            <span>{totalTime}</span>
          </Grid>
          <Grid item xs={4} container justify="space-between" alignItems="center">
            {!edit ? (
              <>
                <MyButton
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Chỉnh sửa
                </MyButton>
                <MyButton onClick={addChapter}>Thêm</MyButton>
                <MyButton onClick={deleteDetail}>Xóa</MyButton>
              </>
            ) : (
              <>
                <MyButton
                  onClick={() => {
                    updateDetail({ ...detail, title: titleEdit });
                    setEdit(false);
                  }}
                  disabled={titleEdit === ""}
                >
                  xác nhận
                </MyButton>
                <MyButton onClick={cancelHandler}>Hủy</MyButton>
              </>
            )}
          </Grid>
        </Grid>
      </ListItem>
      {open && (
        <List disablePadding component="div">
          {chapter.map((value, index) => (
            <CourseChapter
              id={index}
              chapter={value}
              updateChapter={updateChapter(index)}
              deleteChapter={deleteChapter(index)}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default CourseDetail;
