export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, data: 'Success' });
    } else {
      reject(new Error('Failed to get response'));
    }
  });
}
