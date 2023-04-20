export default function uploadPhoto(fileName) {
  return Promise((reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
