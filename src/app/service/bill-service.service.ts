import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../Models/bill/bill';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  private url = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient ) { }

  getAllBills(){
    return this.httpClient.get<Bill[]>(this.url,{
      responseType: 'json'
    });
  }
}
