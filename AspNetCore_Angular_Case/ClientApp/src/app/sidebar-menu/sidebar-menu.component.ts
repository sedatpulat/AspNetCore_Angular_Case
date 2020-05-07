import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  menulist: any[];
  constructor(private menuService: MenuService) {
    this.menuService.getAll().subscribe(response => {
      this.menulist = response;
    }, error => console.log(error));
  }

  ngOnInit() {
  }

}
