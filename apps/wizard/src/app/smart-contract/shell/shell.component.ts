import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SmartContractFacade } from '../smart-contract-facade';

@Component({
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  constructor(private facade: SmartContractFacade) {

    // Loading the 'main' component should populate the state and initialize the facade
    // Could also be done on construct, matter of preference
    this.facade.init();
  }
}
