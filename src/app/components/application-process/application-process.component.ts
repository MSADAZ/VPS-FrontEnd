import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-application-process',
  templateUrl: './application-process.component.html',
  styleUrls: ['./application-process.component.css']
})
export class ApplicationProcessComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  checked = false;
  // indeterminate = false;
  // labelPosition: 'before' | 'after' = 'after';
  // disabled = false;
  
   
   

  
  Countries: Food[] = [
    {value: '0', viewValue: 'France'},
    {value: '1', viewValue: 'USA'},
    {value: '2', viewValue: 'England'}
  ];

  constructor(private _formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
