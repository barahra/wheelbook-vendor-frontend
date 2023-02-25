import { Component,ViewChild,ElementRef } from '@angular/core';
import { faEdit, faEllipsis, faEllipsisV, faFilter,faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent {
@ViewChild('tabheader', {static:false}) tabheader!: ElementRef;
@ViewChild('container', {static:false}) container!: ElementRef;

  faFilter = faFilter;
  faSearch = faSearch;
  faEllipsisV = faEllipsisV;
  faEdit = faEdit;
  faTrash = faTrash;

  scrollHeaderOnBodyScroll(){
    let scrollLeft = this.container.nativeElement.scrollLeft;
    this.tabheader.nativeElement.scrollLeft = scrollLeft;
  }
}
