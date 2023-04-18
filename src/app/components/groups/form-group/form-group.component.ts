import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';


@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {
  formulario: FormGroup


  constructor(private groupService: GroupsService,
    private router: Router) {


    this.formulario = new FormGroup({

      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      date: new FormControl(),
      description: new FormControl(null, [
        Validators.maxLength(100)
      ])

    });

  }
  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched;
  }

  async onSubmit() {
    await this.groupService.create(this.formulario.value);
    this.router.navigate(['/groups']);
  }


}
