import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    const authToken = this.authService.getToken();
    return this.http.put('firbase url' + authToken, this.recipeService.getRecipes());
  }

  getRecipes() {
    const authToken = this.authService.getToken();

    this.http.get('firbase url' + authToken)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
