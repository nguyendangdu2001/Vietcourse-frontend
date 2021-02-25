import React, { useEffect } from "react";
import { makeStyles, CardContent, CardActions, Card, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const CourseSkelethon = (props) => {
    const {customXs,customMd} = props
    const useStyle = makeStyles((theme) => ({
        root: {
            position: "relative",
            margin: theme.spacing(2),
            borderRadius:10,
            [theme.breakpoints.down("md")]: {
                margin: theme.spacing(1),
            }
        },
        media: {
            height: 168,
            [theme.breakpoints.down("md")]: {
                height: 120,
            },
        },
        title: {
            marginTop: theme.spacing(4),
            height: 116,
            [theme.breakpoints.down("md")]: {
                marginTop: theme.spacing(0),
            },
        },
    }));
    const classes = useStyle();
    useEffect(() => {
        console.log();
        return () => {
        }
    }, [classes])
    return (
        <Grid xs={customXs?customXs:12} md={customMd?customMd:12} item={true}>
            <Card className={classes.root}>
            <Skeleton variant='rect' animation="wave" className={classes.media} />
            <CardContent className={classes.title}>
                <Skeleton height={64} animation="wave" />
                <Skeleton height={20} animation="wave" width="50%" />
            </CardContent>
            <CardActions disableSpacing>
                <Skeleton variant="circle" animation="wave" height={36} width={36} style={{ padding: 12 }} />
                <Skeleton variant="circle" animation="wave" height={36} width={36} style={{ padding: 12 }} />
            </CardActions>
        </Card>
        </Grid>
        
    );
};
