import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth/auth.service';
import {AuthGaurd} from './auth/auth-gaurd.service';
import {RecipeModule} from './recipes/recipe.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {AuthRoutingModule} from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RecipeModule,
    ShoppingListModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule {
}
