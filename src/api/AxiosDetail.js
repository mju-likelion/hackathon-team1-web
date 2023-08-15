import Axios from "./Axios";

export const AxiosDetail = async (infoId, usecallbackFunction) => {
  try {
    const response = await Axios.get(
      `/nestjs/api/insurance-suggesters/one/${infoId}`
    );
    return usecallbackFunction(response.data);
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
