import { StudentService } from './../students/students.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../students/students';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

    child: Student;
  
  constructor(private route: ActivatedRoute, private service: StudentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      let studentNo = param.get("no");
      console.log(studentNo);

      let students = this.service.getStudents();
      for (let student of students) {
        if (student.stdNo == parseInt(studentNo)) {
          this.child = student;
          break;
        }

      }
    })
  }

}
