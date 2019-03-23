import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  private recipe:Recipe;

  constructor(
    private route:ActivatedRoute,
    private recipesService:RecipesService
  ) { }

  ngOnInit() {    
      this.route.params.subscribe(
        (params:Params)=>{                   
          this.recipe=this.recipesService.getRecipe(params['recipeId']);          
        }
      );
  }  
}
