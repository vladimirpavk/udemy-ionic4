import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  private recipe:Recipe;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private recipesService:RecipesService,
    private alertController:AlertController
  ) { }

  ngOnInit() {    
    this.route.params.subscribe(
      (params:Params)=>{                   
        this.recipe=this.recipesService.getRecipe(params['recipeId']);          
      }
    );
  }

  public async onDeleteButtonClicked(){
/*     console.log('onDeleteButtonClicked');
    this.recipesService.removeRecipe(this.recipe.id);
    this.router.navigate(['/recipes']); */
    await this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Delete recipe',
      subHeader: this.recipe.title,
      message: 'Do you really want to delete this recipe ?',
      buttons: [
        {
          text: 'Yes',
          handler: ()=>{
            //console.log('Yes button clicked...');
            this.recipesService.removeRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        },
        {
          text:'No',
          role: 'cancel',
          handler: ()=>{
            console.log('No button clicked...');
          }
        }
      ]
    });

    await alert.present();
  }

}
