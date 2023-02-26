import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorListRoutingModule } from './vendor-list-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    VendorListComponent
  ],
  imports: [
    CommonModule,
    VendorListRoutingModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgSelectModule
  ]
})
export class VendorListModule { }
