import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
      path:'',
      component: LoginComponent
    },

    {
      path: 'register',
      component: RegisterComponent
    },

    {
      path: 'createPost',
      component: CreatePostComponent
    },

    {
      path: 'homepage',
      component: HomepageComponent
    },

    {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
