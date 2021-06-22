interface DirectorInterface {
    workFromHome(): string;
    getToWork(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return ("Working from home");
    }
    getToWork() {
        return ("Getting a coffee break");
    }
    workDirectorTasks() {
        return ("Getting to director tasks");
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return ("Working from home");
    }
    getCoffeeBreak() {
        return ("Cannot have a break");
    }
    workTeacherTasks() {
        return ("Getting to work");
    }
}
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof (salary) == "number" && salary < 500)
        return new Teacher();
    else
        return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: Director | Teacher): boolean {
    return (employee instanceof Director) ? true : false;

}

function executeWork(employee: Director | Teacher): string {
    return (isDirector(employee)?  employee.workDirectorTasks() :  employee.workTeacherTasks());
}


console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
