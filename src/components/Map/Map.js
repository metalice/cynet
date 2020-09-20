import React from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker/MapMarker";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  map: {
    height: "50%",
    width: "100%",
  },
}));

const Map = ({ favoriteCities }) => {
  const classes = useStyles();

  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={{
          lat: 0,
          lng: 0,
        }}
        defaultZoom={1}
      >
        {Object.values(favoriteCities).map((values) => (
          <MapMarker key={`${values.coord.lat}-${values.coord.lon}`} values={values} lat={values.coord.lat} lng={values.coord.lon} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
