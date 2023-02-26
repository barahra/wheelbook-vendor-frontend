import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorDetailsRoutingModule } from './vendor-details-routing.module';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    VendorDetailsComponent
  ],
  imports: [
    CommonModule,
    VendorDetailsRoutingModule,
    FontAwesomeModule,
    ProgressbarModule,
    TabsModule
  ]
})
export class VendorDetailsModule { }
