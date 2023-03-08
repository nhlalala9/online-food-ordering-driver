import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrdersComponent } from './Components/orders/orders.component';

const routes: Routes = [
  { path: 'driver/register', component: RegisterComponent },
  { path: 'driver/login', component: LoginComponent },
  { path: 'driver/dashboard', component: DashboardComponent },
  { path: 'driver/orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
