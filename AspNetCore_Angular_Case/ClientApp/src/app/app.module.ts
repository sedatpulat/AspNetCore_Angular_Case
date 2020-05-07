import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
      { path: 'task', loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule) },
    ])
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
