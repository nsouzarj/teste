import { FormGroup } from '@angular/forms';
import { OnInit, Component } from '@angular/core';


@Component({
  selector: 'app-formbase',
  template: '<br>'

})
export class FormbaseComponent implements OnInit {
  formpadrao: FormGroup;
  msgs = [];
  constructor() {

  }

  ngOnInit() {

  }


  showInfo(msg: string) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Informação: ', detail: msg });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ key: 'msg1', severity: 'error', summary: 'Error ', detail: 'Error ao cadastrar' });
  }


  showSuccess() {
    this.msgs.push({ key: 'msg1', severity: 'success', summary: 'Successo :', detail: 'No cadastramento/alteracão' });
  }

}
