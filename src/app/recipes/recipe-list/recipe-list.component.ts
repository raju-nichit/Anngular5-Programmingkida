import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../auth/auth.service';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private authService: AuthService, private dsService: DataStorageService) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated())
      this.dsService.getRecipes();
    this.recipes = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  onNewRecipe() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['new'], {relativeTo: this.activateRoute});
    } else {
      this.router.navigate(['/signin']);
    }

  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}
