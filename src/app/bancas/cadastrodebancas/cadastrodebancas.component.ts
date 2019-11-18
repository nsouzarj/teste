import { BancaProcesso } from './../../models/model.geral';
import { Component, OnInit } from '@angular/core';
import { FormbaseComponent } from 'src/app/shared/formbase/formbase.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BancaservicoService } from 'src/app/servicos/servicobanca.service';
import { first } from 'rxjs/operators';
import { Message, MessageService } from 'primeng/components/common/api';

@Component({
  selector: 'app-cadastrodebancas',
  templateUrl: './cadastrodebancas.component.html',
  styleUrls: ['./cadastrodebancas.component.css'],
  providers: [MessageService]
})
export class CadastrodebancasComponent extends FormbaseComponent implements OnInit {
  banca: BancaProcesso[];
  msgs: Message[] = [];
  formpadrao = new FormGroup({
    banca: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    emailgestordabanca: new FormControl('', Validators.email)
  });

  constructor(private servicobanca: BancaservicoService, private messageService:
    MessageService) {
    super();

  }

  ngOnInit() { }

  salvarBanca() {
    this.servicobanca.salvarBancas(this.formpadrao.value).pipe(first())
      .subscribe(banca => {
        this.banca = banca;
      });
    if (this.banca != null) {
      this.showSuccess();
    } else {
      this.showError();
    }

  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info ', detail: 'PrimeNG rocks' });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ key: 'msg1', severity: 'error', summary: 'Error ', detail: 'Error ao cadastrar' });
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  showSuccess() {
    this.msgs.push({ key: 'msg1', severity: 'success', summary: 'Successo :', detail: 'No cadastramento/alteracão' });
  }



}

