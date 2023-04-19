import { Component } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  groups: any[];

  constructor(private groupsService: GroupsService) {
    this.groups = [];
  }



}
