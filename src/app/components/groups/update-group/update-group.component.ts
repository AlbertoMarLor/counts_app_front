import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent {


  group: any;
  formulario: FormGroup

  constructor(private groupService: GroupsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.group = {}
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

  ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupService.getById(parseInt(data['groupId']))
      console.log(this.group);

    })
    //Recuperar los datos del grupo
    /*   this.formulario.setValue({ name: 'cosa', date: '2023-10-22', description: 'lo que sea' }) */
  }




}



