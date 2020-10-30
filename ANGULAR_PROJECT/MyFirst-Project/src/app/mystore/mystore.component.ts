import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Mystore } from './mystore';
import { Mystoreservice } from './mystore.service';


@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent implements OnInit {

  store: Set<Mystore>
  stores: Mystoreservice;

  constructor(private route: ActivatedRoute, private myService: Mystoreservice) {
  }

  ngOnInit(): void {
    if (this.stores == null) {
      //this.stores = this.myService.getProducts();

    }

  }

}
