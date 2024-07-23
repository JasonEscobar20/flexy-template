import { Injectable } from '@angular/core';

import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool

} from 'amazon-cognito-identity-js'

import { environment } from "../../../enviroments/environment";

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CognitoServiceService {
  userPool: any;
  cognitoUser: any;
  username: string;

  constructor(private router: Router) { }

  // Login
  login(emailAddress: any, password: any) {
    const authenticationDetails = new AuthenticationDetails({
      Username: emailAddress,
      Password: password
    });

    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId
    }

    this.username = emailAddress;
    this.userPool = new CognitoUserPool(poolData);

    let userData = { Username: emailAddress, Pool: this.userPool };
    this.cognitoUser = new CognitoUser(userData);

    this.cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result: any) => {
        console.log(result)
        // this.router.navigate(["/mforms/index"])
        console.log("Success")
      },
      newPasswordRequired: () => {
        // this.router.navigate(['/mforms/index'])
        console.log('nueva contrasena')
      },
      onFailure: (error: any) => {
        console.log({error})
      }
    })
  }

  logOut() {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId,
    };

    this.userPool = new CognitoUserPool(poolData);
    this.cognitoUser = this.userPool.getCurrentUser()

    console.log(this.userPool)
    console.log(this.cognitoUser)
  }
}
