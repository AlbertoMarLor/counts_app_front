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

  onLogOut() {
    //borro el token
    localStorage.removeItem('cashFlowToken');

    // navego al login
    this.router.navigate(['/home']);
  }

  async ngOnInit() {

    this.user = await this.usersService.getUsers()

  }


}
