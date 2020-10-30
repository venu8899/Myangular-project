"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
var core_1 = require("@angular/core");
var employee_1 = require("./employee");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employees = new Set();
    }
    EmployeeService.prototype.getEmployees = function () {
        var employee;
        this.employees.add(employee);
        var employee1 = new employee_1.Employee(1002, "Mike", 20000, "Male");
        this.employees.add(employee1);
        return this.employees;
    };
    EmployeeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
var empl = new EmployeeService();
var myemp = empl.getEmployees();
console.log(myemp);
