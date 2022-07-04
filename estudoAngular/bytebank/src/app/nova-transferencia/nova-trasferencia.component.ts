import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //outPut vai movimentar os dados para outro lugar
  //aoTransferir é definido como evento
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 123;
  destino: number = 123;

  transferir() {
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
