import { Injectable } from '@angular/core';
import { Action } from '../models/action.models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterValue$ : Subject<Action> = new BehaviorSubject<Action>({value: 0, numberOfActions: 0});
  getCounterValue$ = this.counterValue$.asObservable();

  constructor() { }
    /**
   * Method to set Counters Values
   * @param value  value parameters
   * @param actionNumbers  numbers of actions
   */
    setCounterValue(value?: number, actionNumbers?: number | any) {
      if(actionNumbers % 30  === 0 ){
        value = value as number * 2;
      }
  
      localStorage.setItem('counter_data_values', JSON.stringify([{value:value, numberOfActions: actionNumbers}]));
      this.counterValue$.next({value:value, numberOfActions: actionNumbers});
    }
}
