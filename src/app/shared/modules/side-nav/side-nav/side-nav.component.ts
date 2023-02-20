import { Component } from '@angular/core';
import { faAngleDoubleLeft, faCogs, faDashboard, faQuestion } from '@fortawesome/free-solid-svg-icons';
import * as ICONS from '@fortawesome/free-solid-svg-icons';
import menus from "../menu-list"
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  ICONS = ICONS;
  faCogs = faCogs;
  faQuestion = faQuestion;
  faDashboard = faDashboard;
  faAngleDoubleLeft = faAngleDoubleLeft;
  isCollapsed = false;

  menuList: any = [];
  constructor() {
    this.menuList = menus
  }

  ngOnInit() { }

  icons(iconObject: any) {
    return eval(`this.ICONS.${iconObject.icon}`)
  }
}
