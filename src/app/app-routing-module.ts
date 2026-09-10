import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ListarProdutos } from './components/produtos/listar-produtos/listar-produtos';
import { CadastrarProdutos } from './components/produtos/cadastrar-produtos/cadastrar-produtos';

const routes: Routes = [
  {path: '', component:Home},
  {path:'produtos', component:ListarProdutos},
  {path: 'produtos/cadastrar', component:CadastrarProdutos}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
