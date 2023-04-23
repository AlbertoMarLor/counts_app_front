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
  users: any[];


  constructor(private groupsService: GroupsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.formulario = new FormGroup({
      username: new FormControl()
    });
    this.group = {};
    this.users = [];

  }


  async onInput() {
    if (this.formulario.value.username !== '') {

      this.activatedRoute.params.subscribe(async data => {
        this.users = await this.groupsService.findUser(this.formulario.value.username, parseInt(data['groupId']))
      });
    }

  }

  onClick(userId: number) {

    this.activatedRoute.params.subscribe(async data => {
      let object = { userId: userId, groupId: parseInt(data['groupId']) }
      console.log(object);
      this.users = await this.groupsService.addUser(object)

    });
  }




}
