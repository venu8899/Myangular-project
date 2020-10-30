import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './purchase.service';
import { PurchaseOrder } from './purchaseorder';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  
  orders: Set<PurchaseOrder>
  order: PurchaseOrder;
  
  constructor(private route: ActivatedRoute, private purchaseService: PurchaseService) {
    //console.log("constructor");
    //console.log(this.orders);
  }
  
  ngOnInit(): void {
    if (this.orders == null) {
      this.orders = this.purchaseService.getOrders();
    }
    //this.orders = this.purchaseService.getOrders();
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.route.paramMap.subscribe(param => {
      let no = param.get("no");
      console.log(no);

      let orders = this.purchaseService.getOrders();
      for (let ord of orders) {
        if (ord.orderNo == parseInt(no)) {
          this.order = ord;
          break;
        }
      }
    })

  }
}
