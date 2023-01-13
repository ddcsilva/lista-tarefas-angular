import { Component, OnInit } from '@angular/core';

// Interface
import { ListaTarefas } from '../../model/lista-tarefas';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss'],
})
export class ListaTarefasComponent implements OnInit {
  public listaTarefas: Array<ListaTarefas> = [];

  constructor() {}

  ngOnInit(): void {}

  public setEventListaTarefas(evento: string) {
    this.listaTarefas.push({ tarefa: evento, finalizado: false });
  }

  public excluirItemListaTarefa(evento: number) {
    this.listaTarefas.splice(evento, 1);
  }

  public excluirTodosItensListaTarefa() {
    const confirmado = window.confirm(
      'Você deseja realmente EXCLUIR todos as tarefas?'
    );
    if (confirmado) {
      this.listaTarefas = [];
    }
  }
}
