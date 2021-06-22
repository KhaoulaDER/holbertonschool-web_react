"use strict";
exports.__esModule = true;
exports.printTeacher = void 0;
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
exports.printTeacher = (function (firstName, lastName) {
    return (firstName.charAt(0) + ". " + lastName);
});
console.log(exports.printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return ("Currently working");
    };
    StudentClass.prototype.displayName = function () {
        return (this.firstName);
    };
    return StudentClass;
}());
var student = new StudentClass("khaled", "Derouiche");
console.log(student.workOnHomework());
console.log(student.displayName());
