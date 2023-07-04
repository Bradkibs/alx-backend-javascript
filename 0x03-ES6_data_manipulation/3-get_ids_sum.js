export default function getStudentIdsSum(lst) {
  return lst.reduce((total, studentObj) => total + studentObj.id, 0);
}
