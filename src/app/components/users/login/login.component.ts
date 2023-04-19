import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup
  password: string;

  constructor(private userService: UsersService,
    private router: Router) {

    this.password = 'password'
    this.formulario = new FormGroup({

      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)
      ]),

    });
  }

  async onSubmit() {
    const response = await this.userService.login(this.formulario.value);

    localStorage.setItem('cashFlowToken', response.token)
    this.router.navigate(['/groups']);
  }


  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched;
  }


  showPassword() {
    this.password = this.password === 'text' ? 'password' : 'text';
  }

}
