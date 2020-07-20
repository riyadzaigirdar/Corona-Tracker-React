import axios from "axios";

let url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  if (country) {
    url = `${url}/countries/${country}`;
  }
  const {
    data: { recovered, deaths, confirmed, lastUpdate },
  } = await axios.get(url);

  const modifiedData = {
    recovered,
    deaths,
    confirmed,
    lastUpdate,
  };
  url = "https://covid19.mathdro.id/api";
  return modifiedData;
};

export const fetchDataDaily = async () => {
  const { data } = await axios.get(`${url}/daily`);
  return data;
};

export const fetchCountries = async () => {
  const { data } = await axios.get(`${url}/countries`);
  return data;
};
