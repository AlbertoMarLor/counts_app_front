import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'form-bill',
  templateUrl: './form-bill.component.html',
  styleUrls: ['./form-bill.component.css']
})
export class FormBillComponent {

  formulario: FormGroup
  group: any


  constructor(private billsService: BillsService,
    private router: Router,
    private groupsService: GroupsService,
    private activatedRoute: ActivatedRoute) {
    this.group = {}
    this.formulario = new FormGroup({


      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      date: new FormControl(),
      quantity: new FormControl(),

    });


  }

  async onSubmit() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']))
      const res = await this.billsService.create(this.formulario.value, this.group.id);
      console.log(res);

      this.router.navigate([`/groups/bills/${this.group.id}`]);


    })
  }
  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched;
  }

}
