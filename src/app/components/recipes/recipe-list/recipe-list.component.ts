import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('This is a new recipe',
    'This is the description of a new recipe',
    'https://www.publicdomainpictures.net/pictures/30000/velka/cornucopia.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

}
