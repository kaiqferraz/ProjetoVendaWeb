import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/views/produto/produto-delete/produto-delete.component';
import { VendaCreateComponent } from './components/views/venda/venda-create/venda-create.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent

  },

  {
    path: 'clientes',
    component: ClienteReadComponent

  },

  {
    path: 'clientes/create',
    component: ClienteCreateComponent

  },

  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent

  },

  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent

  },

  {
   path: 'produtos',
   component: ProdutoReadComponent
  },

  {
    path: 'produtos/create',
    component: ProdutoCreateComponent
  },

  {
    path: 'produtos/update/:id',
    component: ProdutoUpdateComponent
  },

  {
    path: 'produtos/delete/:id',
    component: ProdutoDeleteComponent

  },

  {
    path: 'vendas',
    component: VendaCreateComponent

  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
