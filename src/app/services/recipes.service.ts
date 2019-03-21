import { Injectable, OnInit } from "@angular/core";
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipesService{
    private _recipes:Recipe[]=[
            { 
                id:123456,
                title:'Pizza',
                imageUrl:'https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2-696x696.jpg',
                ingridients: ['bread', 'bacon', 'ketchup']
            },
            {
                id:78919222,
                title:'Paprika',
                imageUrl:'http://www.floraekspres.rs/flora/image/cache/catalog/PROLECE19/PRVI%20PROL19/1439-600x600.jpg',
                ingridients: ['paprika', 'meat']
            }
        ];
    
    constructor(){        
    }

    public getRecipes():Recipe[]{
        return this._recipes;
    }

    public addRecipe(newRecipe:Recipe):boolean{
        return true;
    }

    public removeRecipe(id:number):boolean{
        return true;
    }
}