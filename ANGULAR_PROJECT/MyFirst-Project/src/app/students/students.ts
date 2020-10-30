import { Component, OnInit } from '@angular/core';

export class Student {
    private _stdNo: number;
    private _stdName: string;
    private _stdStandard: number;

    constructor(stdNo: number, stdName: string, stdStandard: number) {
        this.stdNo = stdNo;
        this.stdName = stdName;
        this.stdStandard = stdStandard;
    }
    public get stdNo(): number {
        return this._stdNo;
    }
    public set stdNo(value: number) {
        this._stdNo = value;
    }
    public get stdName(): string {
        return this._stdName;
    }
    public set stdName(value: string) {
        this._stdName = value;
    }
    public get stdStandard(): number {
        return this._stdStandard;
    }
    public set stdStandard(value: number) {
        this._stdStandard = value;
    }
}

