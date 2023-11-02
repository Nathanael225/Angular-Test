import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { Action } from './models/action.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  counterCurrentValue = 0;

  constructor(private counterService: CounterService) {
   }

  ngOnInit(): void {
    const counterValues = this.getCounterValues() as Action[];

      this.counterService.getCounterValue$.subscribe(
        (data) => {
          if(data) {
            this.counterCurrentValue = data.value as number;
          } 
          this.setBackGroundColor(this.counterCurrentValue);
        }
      );


  }
  
  /**
   *  Method  to set Backgound Color
   * @param counterCurrentValue 
   */
  setBackGroundColor(counterCurrentValue: number) {
    if(counterCurrentValue === 10) {
      document.body.style.backgroundColor = '#e74c3c'
    }
    else if(counterCurrentValue === -10) {
      document.body.style.backgroundColor = '#27ae60'
    }
    else {
      document.body.style.backgroundColor = '#EAE8E8'
    }
  }
  /**
   *  To get Data from local storage
   * @returns data
   */
  getCounterValues(): Action {
    const data = JSON.parse(localStorage.getItem('counter_data_values') as any);
    return data;
  }
  
}
