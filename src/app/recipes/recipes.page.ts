import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  constructor(
    private _recipesService: RecipesService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  
  private itemClicked(eventData){
  }

}
