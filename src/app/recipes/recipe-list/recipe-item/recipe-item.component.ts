import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnDestroy {

  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {

  }


  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
