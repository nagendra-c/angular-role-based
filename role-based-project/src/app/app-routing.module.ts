import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    children:[
      {
        path:'user',
        component:UserComponent
      }
    ]
    //canActivate:[authGuard],
    //data:{roles: ['user']}
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
