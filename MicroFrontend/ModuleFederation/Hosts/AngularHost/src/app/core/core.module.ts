import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './shell.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomeRoutingModule } from '../modules/home/home-routing.module';

@NgModule({
    imports: [RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule, CoreRoutingModule, HomeRoutingModule],
  declarations: [
      ShellComponent      
  ],
  providers: [DatePipe],
})
export class CoreModule { }

