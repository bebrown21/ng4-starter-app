import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.recipesService.addToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
