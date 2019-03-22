import { Injectable, OnInit } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import * as shortid from 'shortid';
import { Observable, Subject } from 'rxjs';
import { REPLServer } from 'repl';

@Injectable()
export class RecipesService{
    private _recipes:Recipe[]=[];

    public newRecipeAdded:Subject<Recipe[]> = new Subject<Recipe[]>();
    
    constructor(){        
        //console.log(shortid.generate());
        this.addRecipe(
            'Pizza',
            'https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2-696x696.jpg',
            ['bread', 'bacon', 'ketchup']
        );
        this.addRecipe(
            'Paprika',
            'http://www.floraekspres.rs/flora/image/cache/catalog/PROLECE19/PRVI%20PROL19/1439-600x600.jpg',
            ['paprika', 'meat']
        );
    }

    public addRecipe(
        title:string,
        imageUrl:string,
        ingridients:string[]
    ):void{
        this._recipes.push( 
            { id: shortid.generate(), title, imageUrl, ingridients}    
        );

        this.newRecipeAdded.next(this._recipes);
    }

    public getRecipes():Recipe[]{
        return [...this._recipes];
    }

    public getRecipe(id:number):Recipe{
        return this._recipes.find(
            (recipe:Recipe)=>{
                return recipe.id === id;
            }
        )
    }
 
    public removeRecipe(id:number):void{
        //return true;
        this._recipes = this._recipes.filter(
            (recipe:Recipe)=>{
                return recipe.id!=id;
            }
        );
    }
}