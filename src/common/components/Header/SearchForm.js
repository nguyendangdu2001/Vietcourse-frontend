import React, { useState, useEffect, useCallback, memo } from "react";
import Axios from "axios";
import {
    List,
    ListItemAvatar,
    Avatar,
    ListItemText,
    makeStyles,
    ListItem,
    Collapse,
} from "@material-ui/core";
import { debounce } from "lodash-es";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { nodeApiLink } from "../../../config/Api/NodeServerLink";

export const SearchForm = () => {
    const [key, setKey] = useState("");
    const [courses, setCourses] = useState([]);
    let open = !!courses;
    const history = useHistory();
    const { t } = useTranslation("translation", { useSuspense: false });
    const search = useCallback(
        debounce(async (key) => {
            const { data } =
                key?.length > 0 ? await Axios.get(`${nodeApiLink}/api/courses/search/${key}`) : [];
            setCourses(data);
        }, 200),
        []
    );
    const useStyle = makeStyles((theme) => ({
        root: {
            position: "absolute",
            top: "100%",
            zIndex: 1050,
            width: "100%",
            background: "white",
        },
        list: {
            position: "relative",
            width: "100%",
            background: "white",
        },
        pic: {
            height: 56,
            width: 56,
        },
        inline: {
            display: "inline",
            marginLeft: 8,
        },
    }));
    const classes = useStyle();
    useEffect(() => {
        search(key);
        return () => {
            //
        };
    }, [key, search]);
    useEffect(() => {
        const unlisten = history.listen(() => {
            setKey("");
        });
        return unlisten;
    }, [history]);

    return (
        <form className="seach-form d-inline-flex align-content-center">
            <input
                type="text"
                name=""
                placeholder={`${t("Tìm kiếm")}...`}
                value={key}
                onChange={(e) => {
                    setKey(e.target.value);
                }}
            />
            <button type="submit">
                <i className="fas fa-search"></i>
            </button>
            <Collapse in={open} className={classes.root}>
                {key && (
                    <List className={classes.list}>
                        {courses &&
                            courses.map((course) => {
                                return (
                                    <Link key={course._id} to={`/detail/${course._id}`}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={course.pic}
                                                    variant="square"
                                                    className={classes.pic}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                className={classes.inline}
                                                primary={course.title}
                                                secondary={course.university}
                                            ></ListItemText>
                                        </ListItem>
                                    </Link>
                                );
                            })}
                    </List>
                )}
            </Collapse>
        </form>
    );
};
export default memo(SearchForm);
