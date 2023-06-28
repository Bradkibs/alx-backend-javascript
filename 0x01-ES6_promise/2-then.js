export default function handleResponseFromApi(promise) {
  const response = { status: 200, body: 'success' };
  return promise
    .then(() => response)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
