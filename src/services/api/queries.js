
import { instance } from "./fetcher";
const getData = async (path) => 
(await instance.get(path)).data;



const postData = async (path, postData) => {
    try {
      const response = await instance.post(path, postData);
      return response.data;
    } catch (error) {
      // Hata yönetimi burada yapılabilir
      console.error('Post isteği sırasında bir hata oluştu:', error);
      throw error;
    }
  };

export { getData ,postData};


// const postData = async (path, postData) => {
//   try {
//     const response = await axios.post(path, postData);
//     return response.data;
//   } catch (error) {
//     // Hata yönetimi burada yapılabilir
//     console.error('Post isteği sırasında bir hata oluştu:', error);
//     throw error;
//   }
// };

// // Kullanımı
// postData('/api/endpoint', { key: 'value' })
//   .then(data => {
//     console.log('Post isteği başarıyla tamamlandı:', data);
//   })
//   .catch(error => {
//     console.error('Post isteği başarısız oldu:', error);
//   });
