import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;


  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/users';

  }


  create(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/register`, body)
    )
  }

  login(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, body)
    )
  }

  isLogged(): boolean {
    if (localStorage.getItem('cashFlowToken')) {
      return true;
    } else {
      return false;
    }
  }

}
