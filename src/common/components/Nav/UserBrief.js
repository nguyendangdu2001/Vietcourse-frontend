import React from "react";
import { useSelector } from "react-redux";
import { Avatar, makeStyles } from "@material-ui/core";

export const UserBrief = () => {
    const { name, userPic } = useSelector(({ userStatus: { userInfo } }) => userInfo);
    const useStyle = makeStyles((theme) => ({
        ava: { width: 56, height: 56, margin: 12 },
    }));
    const classes = useStyle();
    return (
        <div className="userbrief">
            <Avatar variant="circular" className={classes.ava} src={userPic} />
            <div className="user-name d-none d-md-block" id="userName">
                <span>{name}</span>
            </div>
        </div>
    );
};
