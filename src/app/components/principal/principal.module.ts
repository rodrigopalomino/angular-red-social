import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SidebarChatComponent } from './pages/sidebar-chat/sidebar-chat.component';
import { SidebarPublicacionesComponent } from './pages/sidebar-publicaciones/sidebar-publicaciones.component';
import { PagePublicacionesComponent } from './pages/page-publicaciones/page-publicaciones.component';
import { PageChatComponent } from './pages/page-chat/page-chat.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    SidebarChatComponent,
    SidebarPublicacionesComponent,
    PagePublicacionesComponent,
    PageChatComponent,
  ],
  imports: [CommonModule, PrincipalRoutingModule, ReactiveFormsModule],
})
export class PrincipalModule {}
