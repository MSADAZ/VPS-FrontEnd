import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claimed-applications',
  templateUrl: './claimed-applications.component.html',
  styleUrls: ['./claimed-applications.component.css']
})
export class ClaimedApplicationsComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
