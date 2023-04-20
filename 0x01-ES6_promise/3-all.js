import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  return Promise.all([promise1, promise2])
    .then((promises) => {
      const { body } = promises[0];
      const { firstName, lastName } = promises[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
