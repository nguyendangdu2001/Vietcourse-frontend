import { Button, Grid, ListItem, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const CourseChapter = ({ chapter, updateChapter, deleteChapter }) => {
    const { name, time } = chapter;
    const [nameEdit, setNameEdit] = useState(name);
    const [timeEdit, setTimeEdit] = useState(time);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        !name  && time === "00:00" && setEdit(true);
        return () => {};
    }, [name, time]);

    return (
        <ListItem button>
            <Grid container justify="space-between">
                <Grid item container xs={8} alignItems="center" style={{ columnGap: 16 }}>
                    <Grid item xs>
                        {edit ? (
                            <TextField
                                value={nameEdit}
                                onChange={(e) => {
                                    setNameEdit(e.target.value);
                                }}
                                fullWidth
                            />
                        ) : (
                            <div>{name}</div>
                        )}
                    </Grid>
                    <Grid item xs>
                        {edit ? (
                            <TextField
                                value={timeEdit}
                                onChange={(e) => {
                                    setTimeEdit(e.target.value);
                                }}
                                fullWidth
                                autoFocus
                            />
                        ) : (
                            <div>{time}</div>
                        )}
                    </Grid>
                </Grid>
                <Grid item container xs={3} justify="space-between">
                    {!edit ? (
                        <>
                            <Button
                                onClick={() => {
                                    setEdit(true);
                                }}
                            >
                                Chỉnh sửa
                            </Button>
                            <Button onClick={deleteChapter}>Xóa</Button>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => {
                                    updateChapter({ name: nameEdit, time: timeEdit });
                                    setEdit(false);
                                }}
                                disabled={!nameEdit || timeEdit==="00:00"}
                            >
                                Xác nhận
                            </Button>
                            <Button
                                onClick={() => {
                                    setEdit(false);
                                }}
                            >
                                Hủy
                            </Button>
                        </>
                    )}
                </Grid>
            </Grid>
        </ListItem>
    );
};

export default CourseChapter;
