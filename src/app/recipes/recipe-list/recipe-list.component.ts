import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('WHOPPER', 'This is simply a test', 'https://cdn.vox-cdn.com/thumbor/AOyBdPnC9IZLe3ENBbzHH-e8iUc=/0x260:1440x1440/1400x1050/filters:focal(632x830:862x1060):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63960957/BK_ImpossibleWhopper_Post1.0.jpg')
    ];

    constructor(){}
    ngOnInit(){
    }

    onRecipeSelected(recipe: Recipe){
        this.recipeWasSelected.emit(recipe);
    }
}
