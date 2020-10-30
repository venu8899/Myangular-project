import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyElectronicsService {
  private myElectrics = new Set<string>();

  constructor() { }

  getmyElectrics(): Set<string> {
    this.myElectrics.add("Tv's");
    this.myElectrics.add("Speakers");
    return this.myElectrics;

  }
}
