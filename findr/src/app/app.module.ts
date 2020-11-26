import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminTableComponent } from './admin-table/admin-table.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdminLoginComponent,
    AdminTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
