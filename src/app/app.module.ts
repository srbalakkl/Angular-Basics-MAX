import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from "@angular/forms";
import {helloWorld} from "./todelete/helloWorld";
import {dependencyInjection} from "./dependencyInjection/dependencyInjection";

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    helloWorld,
    dependencyInjection,
  ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
