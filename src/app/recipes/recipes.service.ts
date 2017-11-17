import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from "./recipe-list/recipe.model";

@Injectable()
export class RecipesService {

	private recipes:Recipe[] = [
		new Recipe('Turducken', 'Bring on the meat sweats', 'http://www.seriouseats.com/images/2012/10/20121027-turducken-food-lab-01.jpg',),
		new Recipe('Blood Soup', 'Bloody good soup', 'https://www.kawalingpinoy.com/wp-content/uploads/2014/07/dinuguan2a.jpg',)
	];

	recipeSelected = new EventEmitter<Recipe>();



  constructor() { }


  getRecipes(){
  	return this.recipes.slice();
  }

}
