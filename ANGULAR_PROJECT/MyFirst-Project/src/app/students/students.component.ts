import { Component, OnInit } from '@angular/core';
import { StudentService } from './students.service';
import { Student } from './students';

@Component({
  selector: 'appstudents',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  private myStudentService: StudentService;
  students: Set<Student>

  constructor(stdService: StudentService) {
    this.myStudentService = stdService;
  }

  ngOnInit(): void {
    console.log('ngOnInit..')
    this.students = this.myStudentService.getStudents();
  }
}


