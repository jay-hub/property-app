import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyAssessComponent } from './Components/property-assess/property-assess.component';
import { PropertyListComponent } from './Components/property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyAssessComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
