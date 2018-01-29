import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private  dsService: DataStorageService, public  authService: AuthService) {
  }

  ngOnInit() {
  }

  onSaveData() {
    this.dsService.storeRecipes().subscribe(
      (data: any) => console.log(data),
      (error) => console.log(error));
  }

  onFetchData() {
    console.log('header onFechdata called');
    this.dsService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
