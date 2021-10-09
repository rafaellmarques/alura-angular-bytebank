import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input() transfers: Transferencia[] | undefined;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.allTransfers().subscribe((transfers: Transferencia[]) => {
      console.table(transfers);
      this.transfers = transfers;
    })
  }
}
