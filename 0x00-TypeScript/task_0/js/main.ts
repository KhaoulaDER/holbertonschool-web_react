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
const studentsList: Array <Student> = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
studentsList.forEach((object) => {
    const row = document.createElement('tr');
    const row1 = document.createElement('tr');
    const name = document.createElement('td');
    const location = document.createElement('td');
    name.textContent = object.firstName;
    location.textContent = object.location;
    row.appendChild(name);
    row.appendChild(location);
    row1.appendChild("Name");
    row1.appendChild("Location");
    thead.appendChild(row1);
    tbody.appendChild(row);
});
table.appendChild(thead);
table.appendChild(tbody);
document.body.append(table);
