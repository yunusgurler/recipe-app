import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Delicious burger',
      'https://images.deliveryhero.io/image/fd-tr/LH/r1m8-hero.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 10)]
    ),

    new Recipe(
      'Chicken',
      'Juicy chicken',
      'https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/993191471/roast-chicken-how-buy-healthiest-chicken.jpg?quality=82&strip=1&w=640',
      [new Ingredient('Chicken', 1), new Ingredient('Sauce', 100)]
    ),
  ];

  constructor(private slService: ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
