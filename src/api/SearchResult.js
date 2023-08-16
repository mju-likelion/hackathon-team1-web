import Axios from "./Axios";

export const AxiosSearch = async (question, sourceLanguage) => {
  try {
    const response = await Axios.post(`nestjs/api/insurance-suggesters`, {
      question,
      sourceLanguage,
    });
    return response.data.insurances.insuranceInfos;
  } catch (error) {
    throw error;
  }
};
