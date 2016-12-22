import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../Shared/ingredients";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  items : Ingredients[];

  ngOnInit() {
  }

}
