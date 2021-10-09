import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent {

  @Output() onTransfer = new EventEmitter<any>();

  destino: number | string = 0;
  valor: number = 0;

  constructor(private service: TransferenciaService, private router: Router) { }

  newTransfer() {
    console.log('Nova transferência!');

    const valueToEmit: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.newTransfer(valueToEmit).subscribe(
      (result) => {
        console.log(result);
        this.clear();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  clear() {
    this.destino = 0;
    this.valor = 0;
  }
}
