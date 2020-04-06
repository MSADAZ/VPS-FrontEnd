import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { Country } from 'src/models/Country.model';
import { Passport } from 'src/models/Passport.model';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})
export class PassportComponent implements OnInit {
  firstFormGroup: FormGroup;
  Eritrean = true;
  step=0;

  countries: Country [] = [
    {value: 'ER', Code: 'Eritrean'},
    {value: 'United States', Code: 'American'},
    {value: 'United Kingdom', Code: 'British'}
  ];

  passportTypes: Passport []=[
    {name: 'traveldoc', type: 'Emergency Travel Document'},
    {name: 'regular', type: 'Regular'},
    {name: 'diplomat', type: 'Diplomat'},
  ];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
