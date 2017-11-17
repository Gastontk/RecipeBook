import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
	// @ViewChild('nameInput') nameInput:ElementRef;
	myIngredient
	@Output('sendIngredientToParent') sendIngredientToParent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }


  addIngredient(form){
  	if(form.name.value && form.amount.value){
	  	console.log('addIngredient() in shopping-list-edit', form.name.value, form.amount.value)
	  	this.myIngredient = new Ingredient(form.name.value, form.amount.value)
	  	console.log(this.myIngredient, 'is myIngredient');
	  	this.sendIngredientToParent.emit(this.myIngredient);
	  	form.name.value = '';
	  	form.amount.value = ''
	  }
	  	event.preventDefault()
  }
}
