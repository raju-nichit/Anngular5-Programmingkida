import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnDestroy {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  };

  ngOnInit() {

  }

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
