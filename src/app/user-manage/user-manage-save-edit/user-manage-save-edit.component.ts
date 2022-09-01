import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-manage-save-edit',
  templateUrl: './user-manage-save-edit.component.html',
  styleUrls: ['./user-manage-save-edit.component.css']
})
export class UserManageSaveEditComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  @Input() callFunction: any;
  ngOnInit(): void {
  }

}
