import Axios from "./Axios";

export const AxiosDetail = (usecallbackFunction) => {
  Axios.get(
    `/nestjs/api/insurance-suggesters/one/b37ff929-633c-450c-b19c-cfa2855609d9`
  )
    .then((res) => {
      usecallbackFunction(res.data);
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
