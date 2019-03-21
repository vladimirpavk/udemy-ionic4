import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  constructor(private _recipesService: RecipesService) { }

  ngOnInit() {
    /*console.log(
      this._recipesService.getRecipes()
    )*/
  }
  
  private itemClicked(eventData){
    console.log(eventData);
  }

}
