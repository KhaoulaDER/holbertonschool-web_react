interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
let student1: Student = {
    firstName: "khaoula",
    lastName: "Derouiche",
    age: 25,
    location: "Hammamet"
};
let student2: Student = {
    firstName: "Oumaima",
    lastName: "Merhbene",
    age: 24,
    location: "Hammamet"
};
let studentsList: Array <Student> = [student1, student2];

let table = document.createElement("table");
let thead: HTMLTableSectionElement = document.createElement("thead");
let tbody: HTMLTableSectionElement = document.createElement("tbody");
studentsList.forEach((object) => {
    let row = document.createElement('tr');
    let row1 = document.createElement('tr');
    let name = document.createElement('td');
    let location = document.createElement('td');
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
