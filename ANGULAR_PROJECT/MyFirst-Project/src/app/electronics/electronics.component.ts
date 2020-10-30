import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component1.html',
  styleUrls: ['./electronics.component.css'],
  //template: `Hai this is Home Component`,
  
})
export class ElectronicsComponent implements OnInit {

  private myElectricals = new Set<number>();
  color1: string = "red";
  message: string = "Welcome to my page"; //(uesd for one-two way data binding)

  constructor() { }

  getElectricals(): Set<number> {
    this.myElectricals.add(1);
    this.myElectricals.add(2);
    return this.myElectricals;
  }

  ngOnInit(): void {
  }

}
