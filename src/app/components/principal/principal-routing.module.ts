import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarChatComponent } from './pages/sidebar-chat/sidebar-chat.component';
import { SidebarPublicacionesComponent } from './pages/sidebar-publicaciones/sidebar-publicaciones.component';
import { PageChatComponent } from './pages/page-chat/page-chat.component';
import { PagePublicacionesComponent } from './pages/page-publicaciones/page-publicaciones.component';
import { SidebarGeneralComponent } from './pages/sidebar-general/sidebar-general.component';
import { PageGeneralComponent } from './pages/page-general/page-general.component';

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
        path: 'general',
        component: SidebarGeneralComponent,
      },
      {
        path: 'page-chat',
        component: PageChatComponent,
        outlet: 'pageContent',
      },
      {
        path: 'page-publicaciones',
        component: PagePublicacionesComponent,
        outlet: 'pageContent',
      },
      {
        path: 'page-general',
        component: PageGeneralComponent,
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
