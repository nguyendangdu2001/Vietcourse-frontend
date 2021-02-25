import { FormControl, Grid, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import CourseEditTable from "./CourseEditTable";

export function NewAdminCourseEdit({ className }) {
    const [keyWord, setKeyWord] = useState("");
    return (
        <div className={className}>
            <Grid container item>
                <Grid container justify="space-between" style={{ marginTop: 30, marginBottom: 30 }}>
                    <FormControl>
                        <Grid container>
                            <Grid item>
                                <TextField
                                    value={keyWord}
                                    onChange={(e) => setKeyWord(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Search />
                            </Grid>
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
            <CourseEditTable />
        </div>
    );
}

const styledNewAdminCourseEdit = styled(NewAdminCourseEdit)`
    margin: 8px;
    row-gap: 54px;
    display: flex;
    flex-direction: column;
`;
export default styledNewAdminCourseEdit;
