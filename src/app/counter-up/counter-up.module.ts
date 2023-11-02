import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterUpModuleRoutingModule } from './counter-up-routing.module';
import { CounterUpComponent } from './counter-up.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CounterUpComponent],
  imports: [
    CommonModule,
    CounterUpModuleRoutingModule,
    MatCardModule,
    MatButtonModule
    
  ]
})
export class CounterUpModule { }
