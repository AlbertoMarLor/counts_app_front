import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private baseUrl: string;


  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/groups'

  }

  getAll() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}`, options)
    )
  }

  getById(groupId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/:${groupId}`, options)
    )
  }

  create(body: any) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.post<any[]>(`${this.baseUrl}/newGroup`, body, options)
    )
  }

  addUser(body: any, username: string, userId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(

      this.httpClient.post<any[]>(`${this.baseUrl}:/${userId}/adduser/:${username}`, body, options)
    )
  }

  update(body: any, groupId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.put<any[]>(`${this.baseUrl}/edit/:${groupId}`, body, options)
    )
  }

  delete(groupId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${groupId}`, options)
    )
  }


}
