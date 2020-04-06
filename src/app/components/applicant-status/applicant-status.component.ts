import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-applicant-status',
  templateUrl: './applicant-status.component.html',
  styleUrls: ['./applicant-status.component.css']
})
export class ApplicantStatusComponent implements OnInit {
  firstFormGroup: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder, private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }


  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
