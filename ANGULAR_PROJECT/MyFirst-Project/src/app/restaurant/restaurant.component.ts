import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  private myMenu = new Set<string>();
  //private myRestaurant: RestaurantComponent;

  constructor() { }

  getMenu(): Set<string> {
    this.myMenu.add("Veg");
    this.myMenu.add("Non-veg");
    this.myMenu.add("Starters");
    return this.myMenu;

  }
  ngOnInit(): void {
  }

}
