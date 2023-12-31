import Axios from "./Axios";

export const DetectLanguage = async (text) => {
  try {
    const response = await Axios.post(`/fastapi/detect-language`, {
      text,
    });
    return response.data.language;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
