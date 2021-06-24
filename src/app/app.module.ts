import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { MaterialModule } from './material/material.module';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { ProfileComponent } from './tools/profile/profile.component';
<<<<<<< Updated upstream
=======
import { PostFeedComponent } from './pages/post-feed/post-feed.component';
import { CreatePostComponent } from './tools/create-post/create-post.component';
import { PostComponent } from './tools/post/post.component';
import { ReplyComponent } from './tools/reply/reply.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent,
    EmailVerificationComponent,
<<<<<<< Updated upstream
    ProfileComponent
=======
    ProfileComponent,
    PostFeedComponent,
    CreatePostComponent,
    PostComponent,
    ReplyComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig);
   }
}
