import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent {

  formulario: FormGroup;
  bill: any;
  group: any;
  users: any[];


  constructor(private billsService: BillsService,
    private groupsService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.bill = {};
    this.group = {};
    this.users = [];
    this.formulario = new FormGroup({

      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      date: new FormControl(),
      quantity: new FormControl()


    })
  }


  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']));
      this.bill = await this.billsService.getById(parseInt(data['billId']));



      let date = this.bill.date.split('T')[0]

      this.formulario.setValue({ name: this.bill.name, date: date, quantity: this.bill.quantity })


    });

  }

  async onSubmit() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']))
      console.log(this.group.id);

      this.bill = await this.billsService.update(this.formulario.value, parseInt(data['billId']), this.group.id)


      this.router.navigate([`/groups/bills/${this.group.id}`]);


    })

  }

  goBackBills() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']))
      console.log(this.group.id);
      this.router.navigate([`/groups/bills/${this.group.id}`])
    });
  }





}
