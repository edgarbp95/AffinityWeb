import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Compañia',
  templateUrl: './Compañia.component.html',
  styleUrls: ['./Compañia.component.scss']
})
export class CompañiaComponent implements OnInit {

  tab: string = "about";
  constructor() { }

  ngOnInit() {
  }

}
