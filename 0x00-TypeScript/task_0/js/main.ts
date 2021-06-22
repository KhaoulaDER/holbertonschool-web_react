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
const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const thead: HTMLTableSectionElement = document.createElement("thead");
studentsList.forEach((object) => {
    let row = document.createElement('tr');
    let row1 = document.createElement('tr');
    let name = document.createElement('td');
    let location = document.createElement('td');
   
    name.textContent = object.firstName;
    location.textContent = object.location;

    row.appendChild(name);
    row.appendChild(location);

    tbody.appendChild(row);
});
let row1 = document.createElement('tr');
let nameTitle = document.createElement('th');
let locationTitle = document.createElement('th');
nameTitle.textContent = "Name";
locationTitle.textContent = "Location";
row1.appendChild(nameTitle);
row1.appendChild(locationTitle);
thead.appendChild(row1);
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);