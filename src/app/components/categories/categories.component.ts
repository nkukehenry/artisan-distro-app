import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categories = [];
  slideOpts = {
    initialSlide: 0
  };

  constructor() { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {

    this.categories = [
      {
        name: "Tax laws",
        icon: "bulb-outline"
      },
      {
        name: "Marketing",
        icon: "easel-outline"
      },
      {
        name: "Computing",
        icon: "wifi-outline"
      },
      {
        name: "Medical care",
        icon: "call-outline"
      },
      {
        name: "Customer Service",
        icon: "receipt-outline"
      },
      {
        name: "Others",
        icon: "pricetags-outline"
      },
    ];
  }

  getColor() {
    return "#FFFFFF";
  }

}
