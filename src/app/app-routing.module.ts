import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientComponent } from './client/list-client/list-client.component';
import { ClientRegisterComponent } from './client/client-register/client-register.component';

import { ClientComponent } from './client/client.component';



const routes: Routes = [
  {path:'client', component: ClientComponent},
  {path:'client/list', component: ListClientComponent},
  {path:'client/register',component:ClientRegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
