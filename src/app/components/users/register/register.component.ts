import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup
  password: string;

  constructor(private userService: UsersService,
    private router: Router) {

    this.password = 'password'
    this.formulario = new FormGroup({

      username: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)
      ]),
      repite_password: new FormControl(null, [
        Validators.required,
        this.passwordValidator
      ]),
    }, [this.passwordValidator]);
  }

  async onSubmit() {
    await this.userService.create(this.formulario.value);
    this.router.navigate(['/groups']);
  }


  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched

  }

  showPassword() {
    this.password = this.password === 'text' ? 'password' : 'text';
  }

  passwordValidator(form: AbstractControl) {
    const passwordValue = form.get('password')?.value;
    const repitePasswordValue = form.get('repite_password')?.value;

    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      form.get('repite_password')?.setErrors({ passwordValidator: 'Passwords do not match' });
      return { passwordValidator: 'Passwords do not match' }
    }

  }


}
