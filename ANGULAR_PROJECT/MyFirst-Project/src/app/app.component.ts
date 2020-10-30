import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { MyElectronicsService } from './my-electronics.service';
//import { PipeTransform, Pipe } from '@angular/core';
//import { ElectronicsComponent } from './electronics/electronics.component'; (We can import components like this)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: `Hai this is AboutUs Component`
})

export class AppComponent {
  private title = 'MyFirst-Project'; //we can change our project name.
  private myService: MyServiceService;  //Dependency injection
  private myElectricals: MyElectronicsService;  //Dependency injection
  //private myElectronics = new ElectronicsComponent();

  name: string = "venu gopal";
  todaysDate = new Date();
  condition: boolean = true;
  roundDigit: number = 20.1234567;
  myCurrency: number = 999;
  color1: string = "red";
  message: string = "";
  
  constructor(name: MyServiceService, name2: MyElectronicsService) {  //Dependency injection
    this.myService = name;
    this.myElectricals = name2;
    //this.myRestaurant = code;
  }
  onclick() {
    if (this.condition) {
      this.condition = false;
    } else {
      this.condition = true;
    }
  }

  getTitle(): string {
    return this.title;
  }
  getCode1(): Set<number> {
    //console.log("getmenu1");
    return this.myService.getCode();
  }
  getElectricals(): Set<string> {
    return this.myElectricals.getmyElectrics();
  }
}

//let one = new AppComponent(new MyServiceService(), new MyElectronicsService());

//let obj1 = new MyServiceService();
//let obj = new AppComponent(new MyServiceService());