import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterResetComponent } from './counter-reset.component';

const routes: Routes = [
  {
    path: '',
    component: CounterResetComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterResetModuleRoutingModule {}