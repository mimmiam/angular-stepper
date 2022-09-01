import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

// export interface PeriodicElement {
//   firstname: string;
//   lastname: string
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {firstname: 'moomoo', lastname: 'test'},
//   {firstname: 'moomoo2', lastname: 'test2'},
// ];

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  user ={
    firstname: 'pornpan',
    lastname: 'sitthinan'
  };

  title = 'send data';
  data = 10;

  constructor() { }

  alertMsg() {
    Swal.fire({
      title: 'call fuction from main page complete',
      icon: 'success',
      timer: 1500
    })
  }

  ngOnInit(): void {
  }

}
