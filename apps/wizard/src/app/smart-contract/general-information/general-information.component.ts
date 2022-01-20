import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './general-information.component.html',,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
