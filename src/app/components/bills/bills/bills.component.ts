import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  bills: any[]
  group: any[]

  constructor(private billsService: BillsService,
    private activatedRoute: ActivatedRoute,
    private groupService: GroupsService) {

    this.bills = []
    this.group = []
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {

      this.bills = await this.billsService.getAll(parseInt(data['groupId']))
    })

  }


}
