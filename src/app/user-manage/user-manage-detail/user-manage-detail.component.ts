import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-manage-detail',
  templateUrl: './user-manage-detail.component.html',
  styleUrls: ['./user-manage-detail.component.css']
})
export class UserManageDetailComponent implements OnInit {

  constructor() { }
@Input() data: any;
  ngOnInit(): void {
  }

}
