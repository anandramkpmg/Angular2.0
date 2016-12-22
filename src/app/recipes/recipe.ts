import {Ingredients} from "../Shared/ingredients";
export class Recipe {

  constructor(public name, public description, public imagePath, public ingredients: Ingredients[])
  {

  }
}
