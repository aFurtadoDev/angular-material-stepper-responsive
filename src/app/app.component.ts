import { Component, HostListener, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  orientationStepper: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth)
    event.target.innerWidth;
    if(event.target.innerWidth > 610){
      this.orientationStepper = false;
    } else {
      this.orientationStepper = true;
    }
  }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
