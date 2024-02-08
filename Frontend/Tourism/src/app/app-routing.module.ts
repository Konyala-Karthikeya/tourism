import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { ShowemployeesComponent } from './showemployees/showemployees.component';
//import { ShowempbyidComponent } from './showempbyid/showempbyid.component';
//import { ProductsComponent } from './products/products.component';
//import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',            component:LoginComponent},
  {path:'login',       component:LoginComponent},
  {path:'register',    component:RegisterComponent},
  //{path:'showemps',    component:ShowemployeesComponent},
 // {path:'showempbyid', component:ShowempbyidComponent},
  //{path:'products',    component:ProductsComponent},
  //{path:'logout',      component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }