import Axios from "./Axios";

export const AxiosSearch = async (text, language) => {
  const question = text;
  const sourceLanguage = language;
  try {
    const response = await Axios.post(`nestjs/api/insurance-suggesters`, {
      question,
      sourceLanguage,
    });
    return response.data.insurances.insuranceInfos;
  } catch (error) {
    console.log("error occurred");
    throw error;
  }
};
