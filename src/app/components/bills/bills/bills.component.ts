import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  operations: any[];


  constructor(private billsService: BillsService,
    private groupsService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.bills = [];
    this.group = {};
    this.users = [];
    this.totalAmount = 0;
    this.operations = [];


  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']));
      this.bills = await this.billsService.getAll(this.group.id)
      this.users = await this.groupsService.getUsersFromGroup(this.group.id);


      this.totalAmount = await this.billsService.getTotalAmount(this.group.id);

      this.totalAmount = this.totalAmount[0].suma;

      this.operations = await this.billsService.getOperations(this.group.id);

      console.log(this.operations)

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
      this.activatedRoute.params.subscribe(async data => {
        await this.billsService.delete(parseInt(data['groupId']), billId);

      })
      //TODO preguntar a Juanan porqué no borra inmediatamente en la interfaz (hemos hecho cambios en la BBDD, cascada etc)

      this.activatedRoute.params.subscribe(async data => {
        this.group = await this.groupsService.getById(parseInt(data['groupId']))
        const res = await this.billsService.delete(billId, this.group.id);
        if (res) {
          this.bills = await this.billsService.getAll(parseInt(data['groupId']))
        }
      })


    } catch (error: any) {
      console.log({ fatal: error.message })
    }
  }

  goBackGroups() {
    this.router.navigate(['/groups']);
  }

  async onInput($event: any) {
    if ($event.target.value !== '') {
      this.activatedRoute.params.subscribe(async data => {
        this.group = await this.groupsService.getById(parseInt(data['groupId']))
        this.bills = await this.billsService.findBill($event.target.value, this.group.id)
        console.log(this.bills)
      })
    }
  }

}



