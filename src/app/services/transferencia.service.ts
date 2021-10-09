import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private transfer: any[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.transfer = [];
  }

  get transfers() {
    return this.transfer;
  }

  allTransfers(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  newTransfer(transfer: Transferencia) {
    this.getDate(transfer);
    return this.httpClient.post<Transferencia>(this.url, transfer);
  }

  getDate(transfer: any) {
    transfer.data = new Date();
  }
}
