import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, LoggedInAuthGuard } from './auth/auth.guards';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { PdfComponent } from './pdf/pdf.component';
import { UsersComponent } from './users/users.component';
import { ContractDetailComponent } from './homepage/contract-detail/contract-detail.component';

const routes: Routes = [
  {
    path: 'contract',
    loadChildren: () =>
      import('./contract/contract.module').then((m) => m.ContractModule),
  },
  {
    path: 'contract/edit/:id',
    canActivate: [LoggedInAuthGuard],
    loadChildren: () =>
      import('./contract/contract.module').then((m) => m.ContractModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: '',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: HomepageComponent,
  },
  {
    path: 'admin',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard, AdminGuard],
    component: AdminComponent,
  },
  {
    path: 'pdf/:id',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: PdfComponent,
  },
  {
    path: 'users',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard, AdminGuard],
    component: UsersComponent,
  },
  {
    path: 'contract-details/:id',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: ContractDetailComponent,
  },
  { path: 'login', component: LoginComponent },
  { 
    path: 'register', 
    component: RegisterComponent,
    canActivate: [LoggedInAuthGuard, AdminGuard] 
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}