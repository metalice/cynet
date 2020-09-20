import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";

const FavoriteItem = ({ city: { name, sys, main, weather }, setFavoriteCities }) => {
  return (
    <>
      <ListItem key={name}>
        <ListItemText primary={name} secondary={sys.country} />
        <ListItemText primary={`${main.temp}°C`} secondary={weather[0].description} />
      </ListItem>
      <Button size="small" onClick={() => setFavoriteCities((favoriteCities) => favoriteCities.filter((city) => city.name !== name))}>
        Remove
      </Button>
    </>
  );
};

export default FavoriteItem;
