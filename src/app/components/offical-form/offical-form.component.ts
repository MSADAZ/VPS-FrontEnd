import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offical-form',
  templateUrl: './offical-form.component.html',
  styleUrls: ['./offical-form.component.css']
})
export class OfficalFormComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
