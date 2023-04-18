import { HttpClient } from '@angular/common/http';
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
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}`)
    )
  }

  getById(groupId: number) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/:${groupId}`)
    )
  }

  create(body: any) {
    return firstValueFrom(
      this.httpClient.post<any[]>(`${this.baseUrl}/newGroup`, body)
    )
  }

  addUser(body: any, username: string, userId: number) {
    return firstValueFrom(
      this.httpClient.post<any[]>(`${this.baseUrl}:/${userId}/adduser/:${username}`, body)
    )
  }

  update(body: any, groupId: number) {
    return firstValueFrom(
      this.httpClient.post<any[]>(`${this.baseUrl}/edit/:${groupId}`, body)
    )
  }

  delete(groupId: number) {
    return firstValueFrom(
      this.httpClient.delete<any[]>(`${this.baseUrl}/:${groupId}`)
    )
  }


}
