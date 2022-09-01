import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-manage-edit',
  templateUrl: './user-manage-edit.component.html',
  styleUrls: ['./user-manage-edit.component.css']
})
export class UserManageEditComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  ngOnInit(): void {
  }

}
