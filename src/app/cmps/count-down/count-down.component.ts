
import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})

export class CountDownComponent implements OnInit, OnDestroy {

  @Input() targetTime!: number
  @Output() dueFunc = new EventEmitter()
  timeRemaining!: number
  private timer!: any

  ngOnInit() {
    this.timeRemaining = this.targetTime / 1000
    this.timer = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--
      } else {
        clearInterval(this.timer)
        this.dueFunc.emit()
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }

  formatTimeInMins(timeInSeconds: number)  {
    const minutes = Math.floor(timeInSeconds / 60)
    return `${minutes.toString().padStart(2, '0')}:`
  }

  formatTimeInSec(timeInSeconds: number)  {
    const seconds = timeInSeconds % 60;
    return `${seconds.toString().padStart(2, '0')}`
  }

  counterClass () {
    return this.timeRemaining < 6 ? 'low-number' : ''
  }
}