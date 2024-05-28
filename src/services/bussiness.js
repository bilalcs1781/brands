import { HTTP_CLIENT } from "../utils/axiosClient";

const getAllProfiles = async () => {
  return await HTTP_CLIENT.get("/api/profile");
};
const getSingleProfiles = async (id) => {
  return await HTTP_CLIENT.get(`/api/profile/${id}`);
};
const addReview = async (params) => {
  return await HTTP_CLIENT.post("/api/rating/", params);
};
const reviewGet = async (params) => {
  return await HTTP_CLIENT.get(`/api/rating/${params}`);
};

export { getAllProfiles, getSingleProfiles, addReview, reviewGet };
