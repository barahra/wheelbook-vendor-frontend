import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFilter, faSearch, faEllipsisV, faEdit, faTrash, faRefresh, faRightLong, faUserPlus, faUserEdit, faListDots } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @ViewChild('tabheader', { static: false }) tabheader!: ElementRef;
  @ViewChild('container', { static: false }) container!: ElementRef;
  @ViewChild('addEditCustomerTemplate', { static: false })
  addEditCustomerTemplate: any;
  addEditCustomerTemplateRef?: BsModalRef;

  isEditCustomerTemplate:boolean = true;
  faFilter = faFilter;
  faSearch = faSearch;
  faEllipsisV = faEllipsisV;
  faEdit = faEdit;
  faListDots = faListDots;
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

  ngOnInit(): void {
  }

  scrollHeaderOnBodyScroll() {
    let scrollLeft = this.container.nativeElement.scrollLeft;
    this.tabheader.nativeElement.scrollLeft = scrollLeft;
  }

  // Edit Customer Modal
  openEditCustomerModal() {
    this.addEditCustomerTemplateRef = this.modalService.show(this.addEditCustomerTemplate, {
      class: "modal-xl modal-dialog-centered"
    })
  }
}
