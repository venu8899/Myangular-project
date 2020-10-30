import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyServiceService } from './my-service.service';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ElectronicsComponent } from './electronics/electronics.component';
//import { TradingComponent } from './trading/trading.component';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { CustomPipe } from "./example/pipe";
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeeComponent } from './employee1/employee.component';
import { EmployeeDetailsComponent } from './employeedetails/employeedetails.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { PurchaseOrderComponent } from './purchaseorder/purchaseorder.component';
import { MystoreComponent } from './mystore/mystore.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
//import { ExampleComponent } from './example/example.component';
//import { PipeExample } from '@angular/core';

//import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantComponent,
    ElectronicsComponent,
  //  TradingComponent,
    ExampleComponent,
    CustomPipe,
    //HomeComponent,
    AboutusComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    StudentsComponent,
    StudentDetailComponent,
    PurchaseOrderComponent,
    SidebarComponent,
    ContactFormComponent,
    //MystoreComponent
    //PipeExample,
    //ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
    //MatButtonModule
  ],
  providers: [CustomPipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
