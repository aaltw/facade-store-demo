/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, Observable, pairwise, skip } from 'rxjs';

/**
 * State interface
 */
export interface SmartContractState {
  pageIndex: number | null; // Page is null when unknown which page to show
  pages: number; // Amount of apages in the wizard
}

export interface PageEvent extends Pick<SmartContractState, 'pageIndex'> {
  /**
   * Index of the page that was selected previously.
   */
  previousPageIndex: number | null;
}

/**
 * Default state
 */
const SMART_CONTRACT_STATE: SmartContractState = {
  pageIndex: null,
  pages: 4,
};

@Injectable()
export class SmartContractFacade extends ComponentStore<SmartContractState> {
  constructor() {
    // Initialize SmartContractState with default state
    super(SMART_CONTRACT_STATE);
  }

  init(): void {
    // No business logic needed, so patchState is
    this.patchState({ pageIndex: 0 });
  }

  // ***** Selectors ***** //
  readonly #pageIndexChanges$ = this.state$.pipe(
    // map instead of select, so that non-distinct value could go through
    map((state) => state.pageIndex),

    // Get previous page and new page
    pairwise()
  );

  readonly hasPreviousPage$ = this.select(
    ({ pageIndex, pages }) => pageIndex && pageIndex >= 1 && pages != 0
  );

  readonly hasNextPage$ = this.select(this.state$, ({ pageIndex, pages }) => {
    const maxPageIndex = pages - 1;
    return pageIndex && pageIndex < maxPageIndex && pages != 0;
  });

  readonly page$: Observable<PageEvent> = this.select(
    this.#pageIndexChanges$,

    // Now combining the results from both of these Observables into a PageEvent object
    ([previousPageIndex, pageIndex]) => ({
      pageIndex,
      previousPageIndex,
    }),

    // debounce, so that we let the state "settle"
    { debounce: true }
  ).pipe(
    // Skip the emission of the initial state values
    skip(1)
  );
}
