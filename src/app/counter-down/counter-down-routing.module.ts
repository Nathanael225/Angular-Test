import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDownComponent } from './counter-down.component';

const routes: Routes = [
  {
    path: '',
    component: CounterDownComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterDownModuleRoutingModule {}