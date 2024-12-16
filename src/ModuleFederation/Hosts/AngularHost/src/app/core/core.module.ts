import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { ShellComponent } from './shell.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomeRoutingModule } from '../modules/home/home-routing.module';
import { ConfigRoutingModule } from '../modules/config/config-routing.module';

@NgModule({
    imports: [RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CoreRoutingModule,
        HomeRoutingModule,
        ConfigRoutingModule],
  declarations: [
      ShellComponent      
  ],
  providers: [DatePipe],
})
export class CoreModule { }

