import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from './employee-service';
//import { EmployeeService } from './employee1/employee-service';
import {Employee} from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,OnDestroy {
  private myEmployeeService: EmployeeService;

  employees:Set<Employee>

  constructor(empService: EmployeeService) {
    console.log('constructor..');
    this.myEmployeeService = empService;
  }
  
  ngOnInit(): void {
    console.log('ngOnInit..')
    this.employees= this.myEmployeeService.getEmployees();
  }

  ngOnDestroy():void{
    console.log('ngOnDestroy')
    this.employees = null;
  }
}