import { instance } from "./instance";
export const getSliderApi = () => {
  const url = "/sliders";
  return instance.get(url);
};
