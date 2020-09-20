import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import { Select, MenuItem, InputLabel, FormControl, makeStyles } from "@material-ui/core";

import { useCities } from "utils/hooks";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  main: {
    height: 50,
    width: "100%",
  },
}));

export const SearchBar = ({ setCities }) => {
  const { data, error } = useCities();
  const classes = useStyles();
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    !isEmpty(selectedCity) && setCities((cities) => ({ ...cities, [selectedCity.name]: selectedCity }));
  }, [selectedCity, setCities]);

  return (
    <div className={classes.main}>
      {error && "Error Fetching Data.."}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label"> {isEmpty(selectedCity) ? `There are ${data?.cnt} cities available` : "Added City"}</InputLabel>
          <Select autoWidth={true} labelId="demo-simple-select-label" id="demo-simple-select" value={selectedCity} onChange={({ target }) => setSelectedCity(target?.value)}>
            {data?.list.map((city) => {
              return (
                <MenuItem value={city} key={city.name}>
                  {city.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
    </div>
  );
};

export default SearchBar;
