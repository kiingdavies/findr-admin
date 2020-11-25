import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'findr';

  showDiv = {
    previous : false,
    current : false,
    next : false
  };
}
