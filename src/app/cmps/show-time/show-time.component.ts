


import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit, OnDestroy {

  time: Date = new Date()
  classMode: string = 'dark-mode'
  private intervalId: any

  get timeToDisplay() {
    const hours = this.time.getHours();
    const mins = this.time.getMinutes().toString().padStart(2, '0');
    const secs = this.time.getSeconds().toString().padStart(2, '0');
    return `Time is: ${hours}:${mins}:${secs}`;
  }

  getSeason() {
    const summerMonths = [5, 6, 7, 8, 9, 10]
    const winterMonths = [1, 2, 3, 0]
    const springMonths = [4]
    const month = new Date().getMonth() + 1
    let imgUrl = ''

    if (summerMonths.includes(month)) {
      imgUrl = 'summer.png'
    } else if (winterMonths.includes(month)) {
      imgUrl = 'winter.png'
    } else if (springMonths.includes(month)) {
      imgUrl = 'spring.png'
    } else {
      imgUrl = 'autumn.png'
    }
    return `../../assets/img/${imgUrl}`
  }

  toggleMode() {
    this.classMode = this.classMode === 'regular-mode' ? 'dark-mode' : 'regular-mode'
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date()
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
