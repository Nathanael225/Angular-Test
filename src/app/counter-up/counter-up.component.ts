import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CounterService } from '../services/counter.service';
import { Action } from '../models/action.models';

@Component({
  selector: 'app-counter-up',
  templateUrl: './counter-up.component.html',
  styleUrls: ['./counter-up.component.scss']
})
export class CounterUpComponent implements OnInit, OnDestroy {

  counter = 0;
  actionsNumber = 0;
  private destroy$: Subject<void> = new Subject();
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {}

  /**
   * Methode to increase counter
   * @param event 
   */
  increaseCounter(event: any) {
    if (event) {
      this.counterService.getCounterValue$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: Action) => {
          this.counter = data.value as number;
          this.actionsNumber = data.numberOfActions as number + 1; 
        }
      );
      this.counterService.setCounterValue(this.counter + 1, this.actionsNumber);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
