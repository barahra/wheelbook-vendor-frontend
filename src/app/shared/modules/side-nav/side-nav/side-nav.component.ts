import { Component } from '@angular/core';
import { faChevronDown, faHome, faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faHome = faHome;
  faChevronDown = faChevronDown;
  faSquare = faSquare;
  isCollapsed = false;

  constructor(){}

  ngOnInit(){}
}
