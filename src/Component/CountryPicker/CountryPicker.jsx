import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";
import style from "./CountryPicker.module.css";

const CountryPicker = ({ handle }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const { countries } = await fetchCountries();
      setCountries(countries);
    };
    fetchedData();
  }, []);

  return (
    <FormControl className={style.formControl}>
      <NativeSelect
        className={style.nativeSelect}
        onChange={(e) => handle(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
