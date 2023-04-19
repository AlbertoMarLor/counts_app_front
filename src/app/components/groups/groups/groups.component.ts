import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  groups: any[];

  constructor(private groupsService: GroupsService,
    private router: Router) {
    this.groups = [];
  }



  async ngOnInit() {
    this.groups = await this.groupsService.getAll();

  }

  updateGroup(groupId: number) {
    this.router.navigate([`/groups/edit/${groupId}`]);

  }

  async deleteGroup(groupId: number) {
    try {
      const res = await this.groupsService.delete(groupId);
      console.log(res);

      this.groups = await this.groupsService.getAll();


    } catch (error: any) {
      console.log({ fatal: error.message })
    }


  }


}
