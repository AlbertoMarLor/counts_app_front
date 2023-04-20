import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  private baseUrl: string;


  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/groups/bills'

  }

  getAll(groupId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/${groupId}`, options)
    )
  }

  getById(billId: number) {

    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/${billId}`)
    )
  }

  create(body: any) {

    return firstValueFrom(
      this.httpClient.post<any[]>(`${this.baseUrl}/newBill`, body)
    )
  }


  update(body: any, billId: number) {

    return firstValueFrom(
      this.httpClient.post<any[]>(`${this.baseUrl}/edit/:${billId}`, body)
    )
  }

  delete(billId: number) {

    return firstValueFrom(
      this.httpClient.delete<any[]>(`${this.baseUrl}/:${billId}`)
    )
  }


}
