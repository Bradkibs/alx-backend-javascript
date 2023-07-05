interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Brad",
  lastName: "James",
  age: 35,
  location: "Nashville",
};
const student2: Student = {
  firstName: "Urio",
  lastName: "Erick",
  age: 20,
  location: "Moshi",
};
const studentsList: Array<Student> = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const t = document.createElement("table");
  const thead = t.insertRow();
  const nameCell = thead.insertCell();
  const locationCell = thead.insertCell();

  nameCell.textContent = "FirstName";
  locationCell.textContent = "Location";

  studentsList.forEach((student) => {
    const row = t.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  document.body.appendChild(t);
});
