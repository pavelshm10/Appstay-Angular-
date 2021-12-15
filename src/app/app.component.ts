
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { NavItem } from './nav-item.ts';
// export interface MenuIndex {
//   menuIndex: number;
//   submenuIndex: number;
// }

// export interface MenuItem {
//   name: string;
//   children?: [];
//   subMenu: Array<{
//     name: string;
//     children?: [];
//   }>
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input() public menuItems: Array<MenuItem> = [];
  // @Output() public itemSelected = new EventEmitter<MenuIndex>();
  version = VERSION;
  data: NavItem[] = [
    {
      name: "Home"
    }
    ,
    {
      name: "Menu 1",
      children: [
        {
          name: "sub Menu 1"
        },
        {
          name: "sub Menu 2"
        },
        {
          name: "sub Menu 3"
        },
        {
          name: "sub Menu 4",
          children: [
            {
              name: "deep menu 1",
              children:[
                {
                  name:"deepest menu 1"
                }
              ]
            },
            {
              name: "deep menu 2"
            }
          ]
        },
        {
          name: "sub Menu 5"
        }
      ]
    },
    {
      name: "Menu 2",
      children: [
        {
          name: "sub Menu 1"
        },
        {
          name: "sub Menu 2"
        },
        {
          name: "sub Menu 3"
        }
      ]
    },
    {
      name: "Menu 3",
      children: [
        {
          name: "sub Menu 1"
        },
        {
          name: "sub Menu 2"
        },
        {
          name:"sub Menu 3",
          children: [
            {
              name: "category 1"
            },
            {
              name: "category 2"
            },
            {
              name: "category 3"
            }
          ]
        }
      ]
    }
  ];


}
