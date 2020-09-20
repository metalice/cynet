import useSWR from "swr";
import { fetcher } from "utils/communication";

const API = process.env.REACT_APP_WEATHER_API;
const cities = process.env.REACT_APP_CITIES;
const url = `https://api.openweathermap.org/data/2.5/group?id=${cities}&units=metric&appid=${API}`;

export const useCities = () => {
  const { data, error } = useSWR(url, fetcher, { refreshInterval: 10000 });
  return { data, error };
};
