
import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { ComarcaservicoService } from '../servicos/comarcaservico.service';
import { Comarca, Uf } from '../models/model.geral';

@Component({
  selector: 'app-comarcas',
  templateUrl: './comarcas.component.html',
  styleUrls: ['./comarcas.component.css'],
  styles: [`
        /* Column Priorities */
        @media only all {
            th.ui-p-6,
            td.ui-p-6,
            th.ui-p-5,
            td.ui-p-5,
            th.ui-p-4,
            td.ui-p-4,
            th.ui-p-3,
            td.ui-p-3,
            th.ui-p-2,
            td.ui-p-2,
            th.ui-p-1,
            td.ui-p-1 {
                display: none;
            }
        }

        /* Show priority 1 at 320px (20em x 16px) */
        @media screen and (min-width: 20em) {
            th.ui-p-1,
            td.ui-p-1 {
                display: table-cell;
            }
        }

        /* Show priority 2 at 480px (30em x 16px) */
        @media screen and (min-width: 30em) {
            th.ui-p-2,
            td.ui-p-2 {
                display: table-cell;
            }
        }

        /* Show priority 3 at 640px (40em x 16px) */
        @media screen and (min-width: 40em) {
            th.ui-p-3,
            td.ui-p-3 {
                display: table-cell;
            }
        }

        /* Show priority 4 at 800px (50em x 16px) */
        @media screen and (min-width: 50em) {
            th.ui-p-4,
            td.ui-p-4 {
                display: table-cell;
            }
        }

        /* Show priority 5 at 960px (60em x 16px) */
        @media screen and (min-width: 60em) {
            th.ui-p-5,
            td.ui-p-5 {
                display: table-cell;
            }
        }

        /* Show priority 6 at 1,120px (70em x 16px) */
        @media screen and (min-width: 70em) {
            th.ui-p-6,
            td.ui-p-6 {
                display: table-cell;
            }
        }
    `],
})
export class ComarcasComponent implements OnInit {
  comarca: any;
  colunas: any;
  uf: Uf;
  teste: any;
  constructor(private comarcaservico: ComarcaservicoService) { }

  ngOnInit() {
    this.colunas = [
      { field: 'id', header: 'ID', width: '40px' },
      { field: 'nome', header: 'NOME DA COMARCA' },
      { field: 'estado', header: 'ESTADO' },
      { field: 'x', header: 'OPÇÕES'}];

    this.comarcaservico.getComarcas().subscribe(comarca => {
      this.comarca = comarca;

      console.log('COMARCA:  ' + this.comarca);
    });

    this.comarcaservico.getUf().subscribe(uf => {
      this.uf = uf;

      console.log(this.uf);
    });

  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      const value1 = data1[event.field];
      const value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      }

      return (event.order * result);
    });
  }
}




