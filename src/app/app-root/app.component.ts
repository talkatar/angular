import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ex-basic';


   playSound ()  {
    let sound = new Audio('../../assets/sounds/good-6081.mp3');
    sound.play()
  }
}
