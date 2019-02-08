import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NbLayoutModule } from '@nebular/theme';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NbLayoutModule,
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
