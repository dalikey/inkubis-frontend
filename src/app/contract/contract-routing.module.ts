import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInAuthGuard } from '../auth/auth.guards';
import { ContractComponent } from './contract.component';
import { ContractInfoComponent } from './categories/contract-info/contract-info.component';
import { ContractSigneesComponent } from './categories/contract-signees/contract-signees.component';
import { ThirdPartyDataComponent } from './categories/third-party-data/third-party-data.component';
import { SinglePointOfContactDataComponent } from './categories/single-point-of-contact-data/single-point-of-contact-data.component';
import { CertificationsComponent } from './categories/certifications/certifications.component';
import { DataProcessingPurposesComponent } from './categories/data-processing-purposes/data-processing-purposes.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedInAuthGuard],
    component: ContractComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'contractinfo' },
      { path: 'contractinfo', component: ContractInfoComponent },
      { path: 'contractsignees', component: ContractSigneesComponent },
      {
        path: 'processingpurposes',
        component: DataProcessingPurposesComponent,
      },
      { path: 'certification', component: CertificationsComponent },
      { path: 'thirdparty', component: ThirdPartyDataComponent },
      { path: 'spoc', component: SinglePointOfContactDataComponent },
      { path: 'verify', component: VerifyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractRoutingModule {}
