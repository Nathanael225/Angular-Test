import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-reset',
  templateUrl: './counter-reset.component.html',
  styleUrls: ['./counter-reset.component.scss']
})
export class CounterResetComponent implements OnInit {

  resetForm: FormGroup = new FormGroup({});
  result = 0;
  selectionDate = 0;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
  }

  /**
   *  Use to select Date
   * @param event 
   */
  updateDate(event: any) {

    if(event.target.value) {
      let inputDate = new Date(Date.parse(event.target.value));
      const selectedDate= inputDate.toLocaleString().split(" ");
      this.selectionDate = parseInt(selectedDate[0].slice(6, 10));
    }

  }

/**
 * Submit for reset counter
 */
  submitForm() {

    if( 2023 -this.selectionDate > 18) {
      this.counterService.setCounterValue(0,0);
    }

  }

}
