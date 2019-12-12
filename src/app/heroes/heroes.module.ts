import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeroDetailComponent, HeroListComponent ]
})
export class HeroesModule { }