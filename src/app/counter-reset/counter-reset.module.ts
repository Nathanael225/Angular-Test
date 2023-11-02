import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterResetComponent } from './counter-reset.component';
import { CounterResetModuleRoutingModule } from './counter-reset-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule  } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CounterResetComponent],
  imports: [
    CommonModule,
    CounterResetModuleRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class CounterResetModule { }
