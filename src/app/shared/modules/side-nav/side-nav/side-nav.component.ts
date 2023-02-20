import { Component } from '@angular/core';
import { faChevronDown, faCogs, faHome, faQuestion, faSquare } from '@fortawesome/free-solid-svg-icons';
import menus from "../menu-list"
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faCogs=faCogs;
  faQuestion=faQuestion;
  isCollapsed = false;
  menuList : any = [];
  constructor(){
    this.menuList = menus
  }

  ngOnInit(){}
}
