import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee1/employee';
import { EmployeeService } from '../employee1/employee-service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  emp: Employee;
  //myRouter: ActivatedRoute;
  service: EmployeeService;

  constructor(private route: ActivatedRoute, service: EmployeeService) {
    this.service = service;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy..');
  }

  ngOnInit() {
    console.log('ngOnInit');
    let empId = '';
    this.route.paramMap.subscribe((params) => {
      //console.log(params);
      empId = params.get('empId');
      this.findEmployee(empId);
      //this.product = products[+params.get('productId')];
    });

    console.log('employeId is..' + empId);
  }

  findEmployee(empId: string) {
    let employess = this.service.getEmployees();

    for (let temp of employess) {
      if (temp.empId == parseInt(empId)) {
        this.emp = temp;
        break;
      }
    }
  }

  myMethod(first:any) {
    console.log(first);
  }
}
