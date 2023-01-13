import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { PaginaInicialComponent } from './modules/pagina-inicial/pages/pagina-inicial/pagina-inicial.component';

const routes: Routes = [{ path: '', component: PaginaInicialComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
