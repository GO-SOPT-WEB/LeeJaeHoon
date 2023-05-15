import { selectorFamily } from "recoil";
import { basicAxios } from "./../apis/customAxios";

const WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER;
export const weekSelector = selectorFamily({
  key: "weekSelector",
  get: (area) => async () => {
    try {
      const response = await basicAxios.get(
        `/forecast?q=${area}&appid=${WEATHER_API_KEY}&units=metric`
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
});

export const daySelector = selectorFamily({
  key: "daySelector",
  get: (area) => async () => {
    try {
      const response = await basicAxios.get(
        `/weather?q=${area}&appid=${WEATHER_API_KEY}&units=metric`
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
});
