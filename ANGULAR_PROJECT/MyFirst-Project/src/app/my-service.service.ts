import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private myset = new Set<number>();

  constructor() { }

  getCode(): Set<number> {
    this.myset.add(1001);
    this.myset.add(1002);
    this.myset.add(1003);
    return this.myset;

  }

}
