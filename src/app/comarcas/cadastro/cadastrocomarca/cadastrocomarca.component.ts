import { Message, MessageService } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { SevicoufService } from 'src/app/servicos/sevicouf.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ComarcaservicoService } from 'src/app/servicos/comarcaservico.service';
import { Comarca } from 'src/app/models/model.geral';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/http/alert.service';


@Component({
  selector: 'app-cadastrocomarca',
  templateUrl: './cadastrocomarca.component.html',
  styleUrls: ['./cadastrocomarca.component.css'],
  providers: [FormBuilder, MessageService]
})
export class CadastrocomarcaComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private messageService:
    MessageService, private ufservico:
      SevicoufService, private servicoComarca:
      ComarcaservicoService,
    private alertService: AlertService) { }
  uf_iduf: any;
  estadoslista: any;
  comarca: Comarca[];
  comarcasalvar: any;

  msgs: Message[] = [];

  meuForm = new FormGroup({

    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    uf: new FormControl('', [Validators.required])
    // idcomarca: new FormControl('')
  });

  ngOnInit() {
    this.estadoslista = [{ name: 'nome', code: 'iduf' }];
    this.ufservico.getUf().subscribe(estados => {
      this.uf_iduf = estados;
    });
  }

  salvarcomar() {
    this.servicoComarca.salvarComarca(this.meuForm.value).pipe(first())
      .subscribe(comarca => {
        this.comarca = comarca;
      });
    if (this.comarca != null) {
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
