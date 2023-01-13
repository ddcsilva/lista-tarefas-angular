import { Component, OnInit } from '@angular/core';

// Interface
import { ListaTarefas } from '../../model/lista-tarefas';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss'],
})
export class ListaTarefasComponent implements OnInit {
  public listaTarefas: Array<ListaTarefas> = [
    { tarefa: 'Minha nova Tarefa', finalizado: true },
    { tarefa: 'Minha nova Tarefa 2', finalizado: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
