import * as firebase from 'firebase';

export class AuthService {
  singupUser(email: string, passsword: string) {
    console.log('service');
    firebase.auth().createUserWithEmailAndPassword(email, passsword).catch(
      error => {
        console.log(error);
      }
    );
  }
}


