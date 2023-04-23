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
  formulario: FormGroup;

  constructor(private billsService: BillsService,
    private groupsService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.bills = [];
    this.group = {};
    this.users = [];
    this.totalAmount = 0;
    this.formulario = new FormGroup({});

  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {
      this.bills = await this.billsService.getAll(parseInt(data['groupId']))
      this.users = await this.groupsService.getUsersFromGroup(parseInt(data['groupId']));
      this.group = await this.groupsService.getById(parseInt(data['groupId']));

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
      //TODO preguntar a Juanan porqué no borra inmediatamente en la interfaz (hemos hecho cambios en la BBDD, cascada etc)

      this.activatedRoute.params.subscribe(async data => {
        this.group = await this.groupsService.getById(parseInt(data['groupId']))
        const res = await this.billsService.delete(billId, this.group.id);
        console.log(res);
      })


    } catch (error: any) {
      console.log({ fatal: error.message })
    }
  }

  goBackGroups() {
    this.router.navigate(['/groups']);
  }

  async onInput() {
    if (this.formulario.value.searchBill !== '') {
      this.activatedRoute.params.subscribe(async data => {
        this.group = await this.groupsService.getById(parseInt(data['groupId']))
        this.bills = await this.billsService.findBill(this.formulario.value.searchBill, this.group.id)
      })
    }
  }

}



