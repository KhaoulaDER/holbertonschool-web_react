"use strict";
var student1 = {
    firstName: "khaoula",
    lastName: "Derouiche",
    age: 25,
    location: "Hammamet"
};
var student2 = {
    firstName: "Oumaima",
    lastName: "Merhbene",
    age: 24,
    location: "Hammamet"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
var thead = document.createElement("thead");
studentsList.forEach(function(object) {
    var row = document.createElement('tr');
    var row1 = document.createElement('tr');
    var name = document.createElement('td');
    var location = document.createElement('td');
    name.textContent = object.firstName;
    location.textContent = object.location;
    row.appendChild(name);
    row.appendChild(location);
    tbody.appendChild(row);
});
var row1 = document.createElement('tr');
var nameTitle = document.createElement('th');
var locationTitle = document.createElement('th');
nameTitle.textContent = "Name";
locationTitle.textContent = "Location";
row1.appendChild(nameTitle);
row1.appendChild(locationTitle);
thead.appendChild(row1);
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);