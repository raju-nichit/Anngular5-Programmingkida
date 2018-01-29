import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {

  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {


    if (this.authService.isAuthenticated()) {
      this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
    } else {
      this.router.navigate(['/signin']);
    }
  }

  onDeleteRecipe() {
    console.log('detials');
    console.log(this.id);
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
