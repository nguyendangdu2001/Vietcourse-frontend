import React, { memo } from "react";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Card,
  makeStyles,
  Zoom,
  Grid,
} from "@material-ui/core";
import {
  Share,
  AddShoppingCart,
  FavoriteBorderOutlined,
  RemoveShoppingCartRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { useCartMutation } from "../../hooks";

export const Course = ({ data, xs, md }) => {
  const userInfo = useSelector((state) => state.userStatus.userInfo);
  const auth = useSelector((state) => state.userStatus.auth);
  const { addCart, removeCart } = useCartMutation();

  const useStyle = makeStyles((theme) => ({
    root: {
      position: "relative",
      margin: 10,
      borderRadius: 10,
      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
      transformStyle: "preserve-3d",
      transition: "all .2s ease-out",
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(1),
      },
      "& h4": {
        [theme.breakpoints.down("md")]: {
          fontSize: "1.1rem",
        },
      },
      "&:hover": {
        transform: "translateY(2px)",
        boxShadow: "0 2px 5px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.05)",
      },
    },
    media: {
      height: 168,
      [theme.breakpoints.down("md")]: {
        height: 120,
      },
    },
    title: {
      transform: "translateZ(20px)",
      transformStyle: "preserve-3d",
      marginTop: theme.spacing(4),
      height: 116,
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(0),
        fontSize: "1rem",
      },
    },
    courseName: {
      display: "-webkit-box",
      minHeight: 64,
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    uni: {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  }));
  const { picReveal, nameReveal } = {
    picReveal: {
      show: { width: 0, transition: { duration: 1, ease: "easeOut" } },
    },
    nameReveal: {
      initial: {
        backgroundImage: "linear-gradient(180deg,transparent 89%,#00a8e8 0%, #00a8e8 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 100%",
      },
      hover: { backgroundSize: "100% 100%" },
    },
  };
  const addCartHandler = () => {
    addCart(data._id);
  };
  const removeCartItemHandler = () => {
    removeCart(data._id);
  };
  const classes = useStyle();
  return (
    <Grid xs={xs ? xs : 12} md={md ? md : 12} item={true}>
      <motion.div whileHover="hover">
        <Card className={classes.root}>
          <Link style={{ color: "black" }} to={`/detail/${data._id}`}>
            <CardActionArea>
              <div style={{ position: "relative" }}>
                <CardMedia className={classes.media} image={data.pic} src={data.pic} />
                {/* <motion.div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    backgroundColor: "#00a8e8",
                  }}
                  variants={picReveal}
                ></motion.div> */}
              </div>
              <CardContent className={classes.title}>
                <Typography variant="h5" component="h4" className={classes.courseName}>
                  <motion.span
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,transparent 89%,#00a8e8 0%, #00a8e8 100%)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "0 100%",
                    }}
                    variants={nameReveal}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {data.title}
                  </motion.span>
                </Typography>
                <Typography variant="body2" component="p" className={classes.uni}>
                  <motion.span
                    initial="initial"
                    variants={nameReveal}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {data.university}
                  </motion.span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions disableSpacing>
            <IconButton>
              <FavoriteBorderOutlined />
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
            {auth && (
              <>
                <Zoom in={userInfo?.cart?.includes(data._id)}>
                  <IconButton
                    className={classes.fab}
                    onClick={() => {
                      removeCartItemHandler(data._id);
                    }}
                    style={{ marginLeft: "auto" }}
                  >
                    <RemoveShoppingCartRounded />
                  </IconButton>
                </Zoom>
                <Zoom in={!userInfo?.cart?.includes(data._id)}>
                  <IconButton
                    className={classes.fab}
                    onClick={() => {
                      addCartHandler(data._id);
                    }}
                    style={{ marginLeft: "auto" }}
                  >
                    <AddShoppingCart />
                  </IconButton>
                </Zoom>
              </>
            )}
          </CardActions>
        </Card>
      </motion.div>
    </Grid>
  );
};
export default memo(Course);
