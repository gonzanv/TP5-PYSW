import { Routes } from '@angular/router';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TicketListadoComponent } from './components/ticket-listado/ticket-listado.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { DivisaFormComponent } from './components/divisa-form/divisa-form.component';
import { TransaccionListadoComponent } from './components/transaccion-listado/transaccion-listado.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {
        path: 'productos-listado',
        component: ProductoListadoComponent
    },
    {
        path: 'productos-formulario',
        component: ProductoFormComponent
    },
    {
        path: 'transaccion-formulario',
        component: DivisaFormComponent
    },
    {
        path: 'transaccion-listado',
        component: TransaccionListadoComponent
    },
    {
        path: 'tickets-listado',
        component: TicketListadoComponent
    },
    {
        path: 'ticket-formulario/:id',
        component: TicketFormComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**', 
        redirectTo:'home' 
    }
];
