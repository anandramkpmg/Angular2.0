import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  @Input() recipe : Recipe;
  recipeId : string;

  ngOnInit() {
  }

}
