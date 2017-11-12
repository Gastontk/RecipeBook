import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[] = [
		new Recipe('Test Recipe', 'This is a test', 'http://www.wallpaperbackgrounds.org/wp-content/uploads/Picture.jpg',),
		new Recipe('Test Recipe2', 'This is test2', 'http://mms.businesswire.com/media/20150302005941/en/455527/5/ln-mobile-app.jpg?download=1',)
	];


  constructor() {
  	console.log(this.recipes);
   }

  ngOnInit() {
  }

}
