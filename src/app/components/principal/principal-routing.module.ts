import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarChatComponent } from './pages/sidebar-chat/sidebar-chat.component';
import { SidebarPublicacionesComponent } from './pages/sidebar-publicaciones/sidebar-publicaciones.component';
import { PageChatComponent } from './pages/page-chat/page-chat.component';
import { PagePublicacionesComponent } from './pages/page-publicaciones/page-publicaciones.component';
import { CreatePublicacionComponent } from '../create-publicacion/create-publicacion/create-publicacion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'chat',
        component: SidebarChatComponent,
      },
      {
        path: 'publicaciones',
        component: SidebarPublicacionesComponent,
      },
      {
        path: 'page-chat', // Cambia el path para el componente PageChatComponent
        component: PageChatComponent,
        outlet: 'pageContent',
      },
      {
        path: 'page-publicaciones', // Cambia el path para el componente PagePublicacionesComponent
        component: PagePublicacionesComponent,
        outlet: 'pageContent',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}
