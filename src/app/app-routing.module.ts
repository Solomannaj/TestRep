import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JobComponent } from './job/job.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent } 
];

const childRoutes: Routes = [
{
  path: 'home', component: NavbarComponent, canActivate: [AuthGuard],

  children: [
    {
      path: 'job',
      component: JobComponent, canActivate: [AuthGuard]
    },
    {
      path: 'employee',
      component: HomeComponent, canActivate: [AuthGuard]
    }]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
