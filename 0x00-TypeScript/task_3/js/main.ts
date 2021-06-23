/// <reference path = "./crud.d.ts ></reference> ///
import {RowID, RowElement} from "./interface";
import * as CRUD from "./crud.js";


const row: RowElement = {
    firstName: 'Guilaume',
    lastName: 'Salva'
}
console.log(row);
const newRowID: RowID = CRUD.insertRow(row);
console.log(newRowID);

const updatedRow: RowElement = { ...row, age:23 };
console.log(updatedRow);
CRUD.updateRow(newRowID, updatedRow);
console.log(CRUD.updateRow(newRowID, updatedRow));
CRUD.deleteRow(newRowID);
console.log(newRowID);