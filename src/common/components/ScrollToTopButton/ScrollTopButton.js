import React, { memo } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useScrollTrigger, Zoom, Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

export const ScrollTopButton = () => {
    const useStyle = makeStyles((theme) => ({
        root: {
            position: "fixed",
            bottom: theme.spacing(4),
            right: theme.spacing(4),
        },
    }));
    const classes = useStyle();
    const trigger = useScrollTrigger({
        target: window ? window : undefined,
        disableHysteresis: true,
        threshold: 300,
    });
    const handleClick = (e) => {
        const anchor = document.querySelector("#back-to-top-anchor");
        if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
            <Fab color="secondary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    );
};
export default memo(ScrollTopButton)