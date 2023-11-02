import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterUpComponent } from './counter-up.component';

const routes: Routes = [
  {
    path: '',
    component: CounterUpComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterUpModuleRoutingModule {}