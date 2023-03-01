import { instance } from "./instance";
export const getShoesAPI = () => {
  const url = "/Shoes";
  return instance.get(url);
};
export const getColorAPI = (id) => {
  const url = `/Shoes/${id}`;
  return instance.get(url);
};
