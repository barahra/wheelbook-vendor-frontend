import { Component } from '@angular/core';
import { faLocationDot, faMessage, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent {
  faUserCircle = faUserCircle;
  faLocationDot = faLocationDot;
  faMessage = faMessage;

}
