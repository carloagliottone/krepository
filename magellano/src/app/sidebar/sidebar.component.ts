import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  lista : string[] = ["Lezione 1", "Lezione 2", "Lezione 3", "Lezione 4"];

  constructor() { }

  ngOnInit(): void {
  }

}
