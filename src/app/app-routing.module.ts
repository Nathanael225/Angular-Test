import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: '',
    redirectTo: 'up',
    pathMatch: 'full'
  },
  {
    path:'counter',
    loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule)
  },
  {
    path:'up',
    loadChildren: () => import('./counter-up/counter-up.module').then((m) => m.CounterUpModule)
  },
  {
    path:'down',
    loadChildren: () => import('./counter-down/counter-down.module').then((m) => m.CounterDownModule)
  },
  {
    path:'reset',
    loadChildren: () => import('./counter-reset/counter-reset.module').then((m) => m.CounterResetModule)
  },
  { path: '**', redirectTo: '/counter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
