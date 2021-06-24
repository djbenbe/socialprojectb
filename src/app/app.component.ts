import { Component, HostBinding, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socialproject';
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  userHasProfile = true;
<<<<<<< Updated upstream
  userDocument!: UserDocument;
=======
  private static userDocument: UserDocument;
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(val => {
      this.className = val ? 'darkMode' : '';
    });
  }
  constructor(private loginSheet2: MatBottomSheet, private router: Router) {
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {
              this.router.navigate([""]);
            },
            whenSignedOut: user => {
              this.router.navigate([""]);
            },
            whenSignedInAndEmailNotVerified: user => {
              this.router.navigate(["emailVerification"]);
            },
            whenSignedInAndEmailVerified: user => {
              this.getUserProfile();
<<<<<<< Updated upstream
              this.router.navigate([""]);
=======
              this.router.navigate(["postFeed"]);
>>>>>>> Stashed changes
            },
            whenChanged: user => {

            }
          }
        );
      }
    );
  }

  getUserProfile(){
    const _currentUser = this.auth.getAuth().currentUser;
    if (_currentUser && _currentUser.uid) {
      const users: string = _currentUser.uid;

    this.firestore.listenToDocument({
        name: "Getting Document",
        path: [ "Users", users ],
        onUpdate: (result) => {
<<<<<<< Updated upstream
          this.userDocument = <UserDocument> result.data();
          this.userHasProfile = result.exists; 
=======
          AppComponent.userDocument = <UserDocument> result.data();
          this.userHasProfile = result.exists;
          AppComponent.userDocument.userId = users;
          if(this.userHasProfile) {
            this.router.navigate(["postFeed"]);
          } 
>>>>>>> Stashed changes
        }
      
    });
    } else {
      console.error('No User found!');
    }
<<<<<<< Updated upstream
}
=======
  }
>>>>>>> Stashed changes

  onLogoutClick(){
      this.auth.signOut();
  }

  loggedIn(){
      return this.auth.isSignedIn();
  }
  onLoginClick(){
      this.loginSheet2.open(AuthenticatorComponent);
  }
}
<<<<<<< Updated upstream
export interface UserDocument {
  publicName: string;
  description: string;
=======

export interface UserDocument {
  publicName: string;
  description: string;
  userId: string;
>>>>>>> Stashed changes
}