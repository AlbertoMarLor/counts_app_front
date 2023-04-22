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
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/id/${billId}`, options)
    )
  }

  create(body: any, groupId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/${groupId}/newBill`, body, options)
    )
  }


  update(body: any, billId: number, groupId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/edit/${groupId}/${billId}`, body, options)
    )
  }

  delete(billId: number) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('cashFlowToken')!
      })
    }
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${billId}`, options)
    )
  }


}
