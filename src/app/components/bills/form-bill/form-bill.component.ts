import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'form-bill',
  templateUrl: './form-bill.component.html',
  styleUrls: ['./form-bill.component.css']
})
export class FormBillComponent {

  formulario: FormGroup


  constructor(private billsService: BillsService,
    private router: Router) {

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

    const res = await this.billsService.create(this.formulario.value);
    console.log(res);


  }

  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched;
  }

}
