import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesComponent} from './recipes.component';
import {AuthGaurd} from '../auth/auth-gaurd.service';

const recipesRoutes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurd]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurd]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(recipesRoutes)],
  exports: [RouterModule],

})

export class RecipesRoutingModule {
}
