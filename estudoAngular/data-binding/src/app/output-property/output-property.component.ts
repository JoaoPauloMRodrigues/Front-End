import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
  //Tambem é possivel declarar assim
 // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {
 //declarando que ira receber uma entrada no componente pelo atributo valor
 @Input() valor: number = 0;
//declarando que esta expondo o evento ao pai do componente
 @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

}
