import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Modules
import { CoreModule } from './core-module/core.module';
import { SharedModule } from './shared-module/shared.module';
// Locals
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    // angular
    BrowserModule,
    FormsModule,
    // imports
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
