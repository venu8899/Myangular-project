import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    employees = new Set<Employee>();

    constructor() {

    }
    getEmployees(): Set<Employee> {

        if (this.employees.size == 0) {
            let employee = new Employee(1001, "John", 50000, "Male");
            this.employees.add(employee);
            let employee1 = new Employee(1002, "Mike", 20000, "Male");
            this.employees.add(employee1);
        }
        return this.employees;
    }

}


