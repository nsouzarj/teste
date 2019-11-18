import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-paginainexisteste',
  templateUrl: './paginainexisteste.component.html',
  styleUrls: ['./paginainexisteste.component.css']
})
export class PaginainexistesteComponent implements OnInit {
  display = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

}
