import { Component } from '@angular/core';
import {faBell, faHome, faMessage, faPowerOff, faSearch, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faSearch = faSearch;
  faMessage = faMessage;
  faBell = faBell;
  faPowerOff = faPowerOff;
  faUserTie = faUserTie
  version:any ='0.0.0'
  faHome=faHome

  constructor(){}

  ngOnInit(){}

}
