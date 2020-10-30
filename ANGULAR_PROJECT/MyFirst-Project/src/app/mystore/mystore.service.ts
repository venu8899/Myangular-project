import { Injectable } from '@angular/core';
import { Mystore } from './mystore';

@Injectable({
    providedIn: 'root'
})

export class Mystoreservice {
    mystore = new Set<Mystore>();

    constructor() {

    }
    getProducts(): Set<Mystore> {
        if (this.mystore.size == 0) {
            let store = new Mystore();
            store.electronics = "A/c,Refrigarator,Tv's";
            store.mensWare = "Shirts,T-shirts,Trousers";
            store.vegitables = "veggies";
            store.womensWare = "Sarees,Chudidhars";
        }
        return this.mystore;
    }
}
