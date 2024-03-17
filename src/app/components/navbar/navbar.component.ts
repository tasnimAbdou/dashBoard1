import { Component } from '@angular/core';
import { MenuItem,MessageService } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItemContent, MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,DividerModule,ToolbarModule,MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

constructor(){}

  ngOnInit() {
      this.items =[
        {
          label: 'all',
          icon: 'pi pi-fw pi-plus',
      },
      {
          label: 'Modern',
          icon: 'pi pi-fw pi-trash'
      },
      {
        label: 'lastmonth',
        icon: 'pi pi-fw pi-trash'
    },
    {
      label: 'lastyear',
      icon: 'pi pi-fw pi-trash'
  },
  {
    label: 'last 10-days',
    icon: 'pi pi-fw pi-trash'
},
{
  label: 'last 60-days',
  icon: 'pi pi-fw pi-trash'
},
{
  label: 'last 90-days',
  icon: 'pi pi-fw pi-trash'
},
{
  label: 'costum',
  icon: 'pi pi-fw pi-trash'
}
      ];
    }}


