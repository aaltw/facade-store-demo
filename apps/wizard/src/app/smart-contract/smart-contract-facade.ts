import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

/**
 * State interface
 */
 export interface SmartContractState {
   page: number | null; // page is null when unknown which page to show
}

/**
 * Default state
 */
const SMART_CONTRACT_STATE: SmartContractState = {
  page: null,
};

@Injectable()
export class SmartContractFacade extends ComponentStore<SmartContractState> {

  constructor() {
    // Initialize SmartContractState with default state
    super(SMART_CONTRACT_STATE);
  }

  readonly page$ = this.select(({ page }) => page);
}
