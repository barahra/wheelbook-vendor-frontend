import { Component, ViewChild, ElementRef } from '@angular/core';
import { faArrowRight, faEdit, faEllipsisV, faFilter, faRefresh, faRightLong, faSearch, faTrash, faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent {
  @ViewChild('tabheader', { static: false }) tabheader!: ElementRef;
  @ViewChild('container', { static: false }) container!: ElementRef;
  @ViewChild('addEditVendorTemplate', { static: false })
  addEditVendorTemplate: any;
  addEditVendorTemplateRef?: BsModalRef;

  isEditVendorTemplate:boolean = true;

  faFilter = faFilter;
  faSearch = faSearch;
  faEllipsisV = faEllipsisV;
  faEdit = faEdit;
  faTrash = faTrash;
  faRefresh = faRefresh;
  faRightLong = faRightLong;
  faUserPlus = faUserPlus;
  faUserEdit = faUserEdit;

  dummyValues = [
    { id: 1, name: 'lorem 1' },
    { id: 2, name: 'lorem 2' },
    { id: 3, name: 'lorem 3' },
    { id: 4, name: 'lorem 4' },
];
  constructor(private modalService: BsModalService) { }

  scrollHeaderOnBodyScroll() {
    let scrollLeft = this.container.nativeElement.scrollLeft;
    this.tabheader.nativeElement.scrollLeft = scrollLeft;
  }

  // Edit Vendor Modal
  openEditVendorModal() {
    this.addEditVendorTemplateRef = this.modalService.show(this.addEditVendorTemplate, {
      class: "modal-xl modal-dialog-centered"
    })
  }
}
