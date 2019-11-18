import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.component.html',
  styleUrls: ['./bemvindo.component.css']
})
export class BemvindoComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
    this.rota.navigate(['/login']);
  }

}
