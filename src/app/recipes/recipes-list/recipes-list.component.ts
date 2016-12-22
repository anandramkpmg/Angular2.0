import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  constructor() { }
  recipes : Recipe[] =
    [
      new Recipe('Schnitzel', 'Very tasty', 'https://abm-website-assets.s3.amazonaws.com/laboratoryequipment.com/s3fs-public/salmon.jpg', []),
      new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  ngOnInit() {
  }

  OnSelected(recipe : Recipe)
  {
    this.recipeSelected.emit(recipe);
  }
}
