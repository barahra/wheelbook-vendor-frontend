import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AccordionModule,
    RouterModule
  ],
  exports:[
    SideNavComponent
  ],
})
export class SideNavModule { }
