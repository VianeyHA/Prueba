import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { FooterComponent } from './sharedpages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Nav2Component } from './sharedpages/nav2/nav2.component'; 


@NgModule({
  declarations: [
    AppComponent,   
    FooterComponent,
    HomeComponent,
    Nav2Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
