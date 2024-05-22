
import { instance } from "./fetcher";
const getData = async (path) => 
(await instance.get(path)).data;



const postData = async (path, postData) => {
    try {
      const response = await instance.post(path, postData);
      return response.data;
    } catch (error) {
      console.error('Error Post:', error);
      throw error;
    }
  };

export { getData ,postData};

