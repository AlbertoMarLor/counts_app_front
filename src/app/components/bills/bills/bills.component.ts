import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  bills: any[];
  group: any;
  users: any[];
  totalAmount: any;

  constructor(private billsService: BillsService,
    private groupsService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.bills = [];
    this.group = {};
    this.users = [];
    this.totalAmount = 0;

  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {
      this.bills = await this.billsService.getAll(parseInt(data['groupId']))
      this.users = await this.groupsService.getUsersFromGroup(parseInt(data['groupId']));

      this.totalAmount = await this.billsService.getTotalAmount(parseInt(data['groupId']));

      this.totalAmount = this.totalAmount[0].suma;

    });



  }

  goCreateBill() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']))

      this.router.navigate([`groups/bills/${this.group.id}/newBill`]);
    })
  }

  updateGroup(billId: number) {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']))
      this.router.navigate([`groups/bills/edit/${this.group.id}/${billId}`]);
    })
  }

  async deleteGroup(billId: number) {
    try {

      const res = await this.billsService.delete(billId);
      console.log(res);


    } catch (error: any) {
      console.log({ fatal: error.message })
    }
  }


}
