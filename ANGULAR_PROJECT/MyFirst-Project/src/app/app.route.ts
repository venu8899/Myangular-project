import { PurchaseOrderComponent } from './purchaseorder/purchaseorder.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeeComponent } from './employee1/employee.component';
import { EmployeeDetailsComponent } from './employeedetails/employeedetails.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsComponent } from './students/students.component';
import { MystoreComponent } from './mystore/mystore.component';


export const routes: Routes = [
    //{ path: '', component: StudentsComponent },
    //{ path: 'AboutUs', component: AboutusComponent },*/
    //{ path: 'employee-details/:empId', component: EmployeeDetailsComponent },
    { path: 'std-details/:no', component: StudentDetailComponent},
    { path: 'order-details/:no', component: PurchaseOrderComponent},
    { path: 'product-details/:no',component: MystoreComponent}
]