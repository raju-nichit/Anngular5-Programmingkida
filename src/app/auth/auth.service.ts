import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  singupUser(email: string, passsword: string) {
    console.log('service');
    firebase.auth().createUserWithEmailAndPassword(email, passsword).catch(
      error => {
        console.log(error);
      }
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response: Response) => {
        this.router.navigate(['/recipes']);
        firebase.auth().currentUser.getIdToken().then((authToken: string) => {
          this.token = authToken;

        });
      })
      .catch(error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((authToken: string) => {
      this.token = authToken;
    });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
  }
}


