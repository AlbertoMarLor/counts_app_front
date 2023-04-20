import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  formulario: FormGroup;
  group: any;

  constructor(private groupsService: GroupsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.formulario = new FormGroup({
      username: new FormControl()
    });
    this.group = {};
  }

  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched;
  }

  async onInput() {


    /* this.activatedRoute.params.subscribe(async data => {
      this.group = await this.groupsService.getById(parseInt(data['groupId']))
      await this.groupsService.addUser(this.formulario.value, parseInt(data(['groupId']));
      this.router.navigate(['/groups']); */
  }

}
