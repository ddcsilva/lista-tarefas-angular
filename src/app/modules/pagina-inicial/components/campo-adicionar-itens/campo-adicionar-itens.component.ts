import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-campo-adicionar-itens',
  templateUrl: './campo-adicionar-itens.component.html',
  styleUrls: ['./campo-adicionar-itens.component.scss'],
})
export class CampoAdicionarItensComponent implements OnInit {
  @Output() public eventItemListaTarefa = new EventEmitter();

  public adicionaItemListaTarefas: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submeterItemListaTarefas() {
    if (this.adicionaItemListaTarefas.trim()) {
      this.eventItemListaTarefa.emit(this.adicionaItemListaTarefas);
      this.adicionaItemListaTarefas = '';
    }
  }
}
