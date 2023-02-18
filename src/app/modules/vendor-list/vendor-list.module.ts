import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorListRoutingModule } from './vendor-list-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';


@NgModule({
  declarations: [
    VendorListComponent
  ],
  imports: [
    CommonModule,
    VendorListRoutingModule
  ]
})
export class VendorListModule { }
