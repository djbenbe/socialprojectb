import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
<<<<<<< Updated upstream
=======
import { PostFeedComponent } from './pages/post-feed/post-feed.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "emailVerification", component: EmailVerificationComponent },
<<<<<<< Updated upstream
=======
  { path: "postFeed", component: PostFeedComponent },
>>>>>>> Stashed changes
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
