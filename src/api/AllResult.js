import Axios from "./Axios";

export const SearchAll = async () => {
  try {
    const response = await Axios.get(`/nestjs/api/insurance-suggesters/all`);
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
