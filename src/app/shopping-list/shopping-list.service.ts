import { EventEmitter } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  onAddNewItem = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addToIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
