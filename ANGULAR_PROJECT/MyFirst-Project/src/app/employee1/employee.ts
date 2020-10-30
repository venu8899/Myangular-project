import { Component, OnInit } from '@angular/core';

export class Employee {
    private _empId: number;
    private _empName: string;
    private _gender: string;
    private _salary: number;

    constructor(empId: number, empName: string, salary: number, gender: string) {
        this._empName = empName;
        this._empId = empId;
        this._gender = gender;
        this._salary = salary;
    }

    public get empId(): number {
        return this._empId;
    }
    public set empId(value: number) {
        this._empId = value;
    }
    public get empName(): string {
        return this._empName;
    }
    public set empName(value: string) {
        this._empName = value;
    }
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }
}