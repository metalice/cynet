import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardActions, CardContent, Button } from "@material-ui/core";

import { sortCity } from "utils/arrays";
import { getColor } from "utils/colors";

const useStyles = makeStyles({
  main: {
    width: 275,
    margin: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 14,
  },
  description: {
    textTransform: "capitalize",
    margin: 5,
    filter: "brightness(85 %)",
  },
  actions: {
    justifyContent: "center",
  },
});

export const SelectedCitiesItem = ({ name, values, setFavoriteCities }) => {
  const classes = useStyles();

  return (
    <Card className={classes.main}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name} - {values.sys.country}
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography style={{ color: getColor(values.main.temp) }}>{values.main.temp}°C</Typography>
        <Typography className={classes.description} variant="body2" component="p">
          {values.weather[0].description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          size="small"
          onClick={() =>
            setFavoriteCities((favoriteCities) => Object.values({ ...Object.fromEntries(favoriteCities.map((city) => [city.name, city])), [name]: values }).sort(sortCity))
          }
        >
          + Add To Favorites
        </Button>
      </CardActions>
    </Card>
  );
};
export default SelectedCitiesItem;
