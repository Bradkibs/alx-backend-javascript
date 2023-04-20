export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName && !lastName) {
      reject(Error());
    } else {
      resolve({ firstName, lastName });
    }
  });
}
