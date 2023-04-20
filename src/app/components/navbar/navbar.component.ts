import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router,
    public usersService: UsersService) { }

  onLogOut() {
    //borro el token
    localStorage.removeItem('cashFlowToken');
    console.log('holi')
    // navego al login
    this.router.navigate(['/home']);
  }


}
