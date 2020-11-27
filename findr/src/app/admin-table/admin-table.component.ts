import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  @Input() caseNumber: number; // 12
  @Input() firstName: string; // Segun
  @Input() lastName: string; // Davies
  @Input() address: string; // 11 Oderekoko street lagos
  @Input() status: boolean; // resolved or active

  constructor() {}

  ngOnInit(): void {}

  
}
