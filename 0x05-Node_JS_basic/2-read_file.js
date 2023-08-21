const fs = require('fs');

function countStudents(path) {
  /** counts students by reading csv db synchrounously
    * if the db is not available it throws an error
    * else it logs Number of students: NUMBER_OF_STUDENTS
    * and Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES */
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const fieldInfo = [];
    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const field = values[3];
        const firstName = values[0];

        let fieldObj = fieldInfo.find((item) => item.field === field);
        if (!fieldObj) {
          fieldObj = { field, count: 0, first_names: [] };
          fieldInfo.push(fieldObj);
        }
        fieldObj.count += 1;
        fieldObj.first_names.push(firstName);
      }
    }
    console.log(`Number of students: ${lines.length - 1}`);
    for (const obj of fieldInfo) {
      console.log(`Number of students in ${obj.field}: ${obj.count}. List: ${obj.first_names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
