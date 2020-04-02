import { Component, OnInit } from '@angular/core';
import { Visa } from 'src/models/Visa.model';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';


@Component({
  selector: 'app-visa-information',
  templateUrl: './visa-information.component.html',
  styleUrls: ['./visa-information.component.css']
})
export class VisaInformationComponent implements OnInit {
  firstFormGroup: FormGroup;

  visaTypes: Visa [] = [
{ type: 'Student'},
{ type: 'Business'},
{ type: 'Family'},
{ type: 'Diplomatic'}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
