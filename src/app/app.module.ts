// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PaginaInicialModule } from './modules/pagina-inicial/pagina-inicial.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PaginaInicialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
