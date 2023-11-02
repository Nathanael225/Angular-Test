import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDownComponent } from './counter-down.component';
import { CounterDownModuleRoutingModule } from './counter-down-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CounterDownComponent],
  imports: [
    CommonModule,
    CounterDownModuleRoutingModule,
    MatCardModule,
    MatButtonModule

  ]
})
export class CounterDownModule { }
