import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'info-pharmacie', loadChildren: './info-pharmacie/info-pharmacie.module#InfoPharmacieModule'},
            { path: 'edit-pharmacie/:id', loadChildren: './edit-pharmacie/edit-pharmacie.module#EditPharmacieModule'},
            { path: 'commander-produits', loadChildren: './commander-produits/commander-produits.module#CommanderProduitsModule'},
            { path: 'reserver-produits', loadChildren: './reserver-produits/reserver-produits.module#ReserverProduitsModule'},
            { path: 'prods-pharmacie/:id', loadChildren: './prods-pharmacie/prods-pharmacie.module#ProdsPharmacieModule'},
            { path: 'list-commandes', loadChildren: './list-commandes/list-commandes.module#ListCommandesModule'},
            { path: 'list-reservations', loadChildren: './list-reservations/list-reservations.module#ListReservationsModule'},
            { path: 'rechercher-produit/:id', loadChildren: './rechercher-produit/rechercher-produit.module#RechercherProduitModule'},
            { path: 'details-commande/:id', loadChildren: './details-commande/details-commande.module#DetailsCommandeModule'},
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
