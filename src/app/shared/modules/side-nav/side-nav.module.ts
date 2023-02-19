import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AccordionModule
  ],
  exports:[
    SideNavComponent
  ],
})
export class SideNavModule { }
