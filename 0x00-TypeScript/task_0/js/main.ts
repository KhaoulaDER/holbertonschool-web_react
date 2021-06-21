interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "khaoula",
    lastName: "Derouiche",
    age: 25,
    location: "Hammamet"
};
const student2: Student = {
    firstName: "Oumaima",
    lastName: "Merhbene",
    age: 24,
    location: "Hammamet"
};
const studentsList: Array<Student>;
studentsList = [student1, student2];

let table = document.createElement("table");
let tbody = document.createElement("tbody");
studentsList.forEach((object) => {
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let location = document.createElement('td');
    name.textContent = object.firstName;
    location.textContent = object.location;
    row.appendChild(name);
    row.appendChild(location);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
