import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'findr';

  // showDiv = {
  //   previous : false,
  //   current : false,
  //   next : false
  // };

  public show: boolean = false;
  public buttonName: any = 'Show';

  toogle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = 'Logout';
    else this.buttonName = 'Login';
  }
}
