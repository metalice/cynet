import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  marker: {
    color: "white",
    width: 200,
    display: "flex",
    alignItems: "center",
  },
}));

const MapMarker = ({
  values: {
    name,
    main: { temp },
    sys: { country },
  },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.marker}>
      <RoomIcon />
      {name} - {country} / {temp}°C
    </div>
  );
};

export default MapMarker;
