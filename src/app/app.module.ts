// --------- Angular Modules --------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms'

// --------- App Modules -------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import { ClientRegisterComponent } from './client/client-register/client-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    MenuComponent,
    ClientComponent,
    ClientRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
