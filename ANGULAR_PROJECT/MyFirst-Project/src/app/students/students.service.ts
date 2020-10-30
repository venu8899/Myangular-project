import { Injectable } from '@angular/core';
import { Student } from './students';

@Injectable({
    providedIn: 'root'
})

export class StudentService {
    students = new Set<Student>();

    constructor() {

    }
    getStudents(): Set<Student> {

        if (this.students.size == 0) {
            let student = new Student(1001, "Deo", 6);
            this.students.add(student);
            let student1 = new Student(1002, "Spike", 5);
            this.students.add(student1);
        }
        return this.students;

    }
}
