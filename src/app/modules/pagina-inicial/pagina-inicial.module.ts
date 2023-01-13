import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { BotaoExclusaoTotalComponent } from './components/botao-exclusao-total/botao-exclusao-total.component';
import { CampoAdicionarItensComponent } from './components/campo-adicionar-itens/campo-adicionar-itens.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';

// Pages
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    BotaoExclusaoTotalComponent,
    CampoAdicionarItensComponent,
    ListaTarefasComponent,
    PaginaInicialComponent,
  ],
  imports: [CommonModule],
})
export class PaginaInicialModule {}
