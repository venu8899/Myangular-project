import { Injectable } from '@angular/core';
import { PurchaseOrder } from './purchaseorder';

@Injectable({
    providedIn: 'root'
})

export class PurchaseService {
    myOrders = new Set<PurchaseOrder>();

    constructor() {

    }
    getOrders(): Set<PurchaseOrder> {

        if (this.myOrders.size == 0) {
            let order = new PurchaseOrder();
            order.address = "1/2,Marathalli,Bangolore";
            order.approvedby = "xx";
            order.contact = 11111111;
            order.orderAmount = 100000;
            order.orderItem = "cotton";
            order.orderNo = 123;
            order.orderDate = new Date("10-20-2020");
            order.vendor = "abc";
            this.myOrders.add(order);

            let order1 = new PurchaseOrder();
            order1.address = "1/3,Marathalli,Mumbai";
            order1.approvedby = "yy";
            order1.contact = 2222222;
            order1.orderAmount = 200000;
            order1.orderItem = "mirchi";
            order1.orderNo = 456;
            order1.orderDate = new Date("10-10-2019");
            order1.vendor = "mum";
            this.myOrders.add(order1);
        }
        return this.myOrders;

    }

}