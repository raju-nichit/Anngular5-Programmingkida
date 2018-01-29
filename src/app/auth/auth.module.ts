import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [FormsModule]
})
export class AuthModule {

}
