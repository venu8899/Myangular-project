import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  title = 'AngForm';
  name: string = 'abd';

  SaveData(data) {
    console.log(data.value);
  }
  myMethod(first) {
    console.log(first);
  }
  submit(f) {
    console.log(f);
  }
  myGender(m){
    console.log(m);
  }
  myGender1(fe){
    console.log(fe);
  }
}
