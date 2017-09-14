import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo564O7d1wjTcxO0lY6mwQJYA0m475QCfMd3S8GCSNcLWQ5HRk',
      [ new Ingredient('Meat', 1) ]),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg',
      [ new Ingredient('Fruit', 2) ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addToIngredients(ingredients);
  }
}
