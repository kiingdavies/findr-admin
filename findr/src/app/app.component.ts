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

  // To know if the admin is logged in or not
  public show: boolean = false;
  public buttonName: any = 'Login';

  // This is toggle the button from login to logout
  toogle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = 'Logout';
    else this.buttonName = 'Login';
  }

  // users details from db or user frontend
  users = [
    {
      caseNumber: 1,
      firstName: 'Segun',
      lastName: 'Davies',
      address: '11 Oderekoko street lagos',
      status: true,
    },
    {
      caseNumber: 2,
      firstName: 'Dami',
      lastName: 'Kazeem',
      address: '32 ogijo ogun state',
      status: false,
    },
  ];
}
