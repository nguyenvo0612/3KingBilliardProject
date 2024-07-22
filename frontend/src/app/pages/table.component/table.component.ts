import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponentComponent {

  tabs: any = [{
    title: "Phòng bàn",
    content: "Content 1"
  },
  {
    title: "Đặt đồ",
    content: "Content 2"
  }]
  products: any = [{
    code: "HD01",

  }]
  availableProducts : any = [{
   name: "Produc 1"
  },
  {
    name: "Produc 2"
  }]
  selectedProducts?: any 

  numberProducts: number = 0;

  drop() {
    console.log(this.selectedProducts)
  }
  dragStart(product : any) {
    console.log("drag start")
  }
  dragEnd() {
    console.log("drag end")
  }
}
