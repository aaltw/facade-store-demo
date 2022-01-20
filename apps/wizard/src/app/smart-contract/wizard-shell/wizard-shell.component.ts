import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './wizard-shell.component.html',,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
