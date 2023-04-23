import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent {


  group: any;
  formulario: FormGroup;
  user: string;

  constructor(private groupsService: GroupsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {


    this.user = ''
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


  ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']))

      let date = this.group.date.split('T')[0]

      this.formulario.setValue({ name: this.group.name, date: date, description: this.group.description })

    })

  }
  async onSubmit() {
    this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.update(this.formulario.value, parseInt(data['groupId']))
      console.log(this.group);
      this.router.navigate(['/groups']);

    })

  }


  goBackGroups() {
    this.router.navigate(['/groups'])
  }


}



