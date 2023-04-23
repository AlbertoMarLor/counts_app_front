import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: string

  constructor(private router: Router,
    public usersService: UsersService) {

    this.user = ''

  }


  async ngOnInit() {

    this.user = await this.usersService.getUsers()

  }

  onLogOut() {

    //TODO No funciona el removeToken PORQUE?   
    localStorage.removeItem('cashFlowToken');
    this.router.navigate(['/home']);
  }


}
