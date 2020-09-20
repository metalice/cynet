import { makeStyles } from "@material-ui/core";
import React from "react";
import SelectedCitiesItem from "./SelectedCitiesItem/SelectedCitiesItem";
const useStyles = makeStyles((theme) => ({
  selectedCities: {
    display: "flex",
    height: 260,
  },
}));
const SelectedCities = ({ cities, setFavoriteCities }) => {
  const classes = useStyles();
  return (
    <div className={classes.selectedCities}>
      {Object.entries(cities).map(([name, values]) => (
        <SelectedCitiesItem {...{ key: name, name, values, setFavoriteCities }} />
      ))}
    </div>
  );
};

export default SelectedCities;
