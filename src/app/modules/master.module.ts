import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { HeaderModule } from '../shared/modules/header/header.module';
import { FooterModule } from '../shared/modules/footer/footer.module';
import { SideNavModule } from '../shared/modules/side-nav/side-nav.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HeaderModule,
    FooterModule,
    SideNavModule,
    FontAwesomeModule
  ]
})
export class MasterModule { }
