import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListRoutingModule } from './customer-list-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerListRoutingModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgSelectModule
  ]
})
export class CustomerListModule { }
