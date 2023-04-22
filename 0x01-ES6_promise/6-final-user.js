import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    uploadPhoto(filename),
    signUpUser(firstName, lastName),
  ]).then((values) => {
    const respArray = [];
    values.forEach((val) => {
      if (val.status === 'fulfilled') {
        respArray.push({ status: val.status, value: val.value });
      } else {
        respArray.push({
          status: val.status,
          value: `Error: ${val.reason.mesage}`,
        });
      }
    });
    return respArray;
  });
}
