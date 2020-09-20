import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";

import Favorites from "components/Favorites/Favorites";
import SearchBar from "components/SearchBar/SearchBar";
import SelectedCities from "components/SelectedCities/SelectedCities";
import Title from "components/Title/Title";
import Map from "components/Map/Map";

import "./App.scss";

const App = () => {
  const [cities, setCities] = useState({});
  const [favoriteCities, setFavoriteCities] = useState([]);
  return (
    <div className="App">
      <CssBaseline />
      <Favorites favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} />
      <Title />
      <SearchBar setCities={setCities} />
      <SelectedCities cities={cities} setFavoriteCities={setFavoriteCities} />
      <Map favoriteCities={favoriteCities} />
    </div>
  );
};

export default App;
