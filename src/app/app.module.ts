import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import { ClientRegisterComponent } from './client/client-register/client-register.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    MenuComponent,
    ClientComponent,
    ClientRegisterComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
