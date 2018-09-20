import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommanderProduitsComponent} from './commander-produits.component';

const routes: Routes = [
  {
    path: '' ,component :CommanderProduitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommanderProduitsRoutingModule { }
