import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    height: 200,
    width: "100%",
    fontWeight: 800,
    fontSize: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Title = () => {
  const classes = useStyles();
  return <div className={classes.title}>Favorite Cities</div>;
};

export default Title;
