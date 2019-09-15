// --------- Angular Modules --------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// --------- App Modules -------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/show-client/client.component';
import { ClientRegisterComponent } from './client/client-register/client-register.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { AppService } from './app.service';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
