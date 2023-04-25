import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;


  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/users';

  }

  getUsers() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}`, options)
    )
  }

  getUserById(userId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/user/${userId}`, options)
    )
  }

  getRole(groupId: number) {

    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/get/role/${groupId}`)
    )
  }

  getLoggedId() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/loggedId`, options)
    )
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
