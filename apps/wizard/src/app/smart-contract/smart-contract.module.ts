import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';
import { ProductsComponent } from './products/products.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { SummaryAndConfirmationComponent } from './summary-and-confirmation/summary-and-confirmation.component';
import { WizardShellComponent } from './wizard-shell/wizard-shell.component';
import { ShellComponent } from './shell/shell.component';

const smartContractRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        // Components with wizard steps attached
        component: WizardShellComponent,
        children: [
          {
            path: '1',
            // Component - Page One - General info
            component: GeneralInformationComponent,
          },
          {
            path: '2',
            // Component - Page Two - Additional products
            component: ProductsComponent,
          },
          {
            path: '3',
            // Component - Page Three - Summary and confirmation
            component: SummaryAndConfirmationComponent,
          },
        ],
      },
      {
        path: '4',
        // Credits component without wizard shell
        component: CreditsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    CreditsComponent,
    ProductsComponent,
    GeneralInformationComponent,
    SummaryAndConfirmationComponent,
    WizardShellComponent,
    ShellComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(smartContractRoutes)],
})
export class SmartContractModule {}
