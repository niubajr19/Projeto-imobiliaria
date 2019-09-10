import { ClientComponent } from './client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientComponent } from './client/list-client/list-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';



const routes: Routes = [
  {path:'client', component: ClientComponent},
  {path:'client/list', component: ListClientComponent},
  {path: 'client/edit', component: EditClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
