import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, CrisisListComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
