import { Component, OnInit } from '@angular/core';
import { MatNavList, MatListSubheaderCssMatStyler, MatListItem } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [MatNavList, MatDivider, MatListSubheaderCssMatStyler, MatListItem, RouterLinkActive, RouterLink, MatIcon]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
