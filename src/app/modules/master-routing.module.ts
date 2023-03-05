import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      {
        path: 'vendor',
        loadChildren: () => import('./vendor-list/vendor-list.module').then(mod => mod.VendorListModule)
      },
      {
        path: 'details/:id',
        loadChildren: () => import('./vendor-details/vendor-details.module').then(mod => mod.VendorDetailsModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer-list/customer-list.module').then(mod => mod.CustomerListModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
