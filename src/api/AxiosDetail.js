import Axios from "./Axios";

export const AxiosDetail = async (usecallbackFunction) => {
  try {
    const response = await Axios.get(
      `/nestjs/api/insurance-suggesters/one/b37ff929-633c-450c-b19c-cfa2855609d9`
    );
    return usecallbackFunction(response.data);
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
