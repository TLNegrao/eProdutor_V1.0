import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GraphicsService } from 'src/app/services/graphics.service';
import { Chart, ChartType, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

import { FieldsChanged } from '../../model/fieldsChanged.interface';


@Component({
  selector: 'app-put-dashboard',
  templateUrl: './put-dashboard.component.html',
  styleUrls: ['./put-dashboard.component.scss']
})
export class PutDashboardComponent implements OnInit {

  //desativa radio
  isDisabled: boolean = true;

  fieldsChanged: FieldsChanged = {
    areaTotal: false,
    areaAgricultavel: false,
    areaVegetacao: false
  };
  isSaveButtonDisabled = false;




  fazendeiro!: any;
  fazendeiroId: string | null = null;
  farm: any = [];


  upDataForm!: FormGroup;
  cpf!: string;
  cnpj!: string;
  nomeProdutor!: string;
  nomeFazenda!: string;
  cidade!: any;
  estado!: string;
  areaTotal!: string;
  areaAgricultavel!: string;
  areaVegetacao!: string;
  culturasPlantadas: string[] = [];
  form!: FormGroup;
  submitted = false;

  dados!: any;


  constructor(
    private route: ActivatedRoute,
    private user: DeliveryService,
    private formBuilder: FormBuilder,
    private grafico: GraphicsService,
  ) { 
       
  }

  ngOnInit(): void {


    this.route.paramMap.subscribe((params) => {
      this.fazendeiroId = params.get('id'); // pegando o ID da rota
      this.user.getUserProfile(this.fazendeiroId).subscribe((res) => {
        this.farm = res});
    });



    this.upDataForm = this.formBuilder.group({
      tipoDocumento: [''],
      cpf: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      nomeProdutor: ['', [Validators.required]],
      nomeFazenda: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      areaTotal: ['', [Validators.required]],
      areaAgricultavel: ['', [Validators.required]],
      areaVegetacao: ['', [Validators.required]],
    }); 



      
  }



  desativarDocs() {
    this.isDisabled = !this.isDisabled;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



  toggleCultura(cultura: string) {
    const index = this.culturasPlantadas.indexOf(cultura);
    if (index === -1) {
      this.culturasPlantadas.push(cultura);
    } else {
      this.culturasPlantadas.splice(index, 1);
    }
  }



  aualizarFazendeiro(){
    
    const fazendeiro = {
      nomeProdutor: this.nomeProdutor,
      nomeFazenda: this.nomeFazenda,
      cidade: this.cidade,
      estado: this.estado,
      areaTotal: this.areaTotal,
      areaAgricultavel: this.areaAgricultavel,
      areaVegetacao: this.areaVegetacao,
      culturasPlantadas: [
        ...this.farm.culturasPlantadas, // Culturas existentes
        ...this.culturasPlantadas.filter(cultura => !this.farm.culturasPlantadas.includes(cultura)), // Novas culturas selecionadas
      ],
    };

    console.log('FazendeiroputDash',fazendeiro)
    this.user.upDateFazendeiro(this.fazendeiroId, fazendeiro).subscribe(
      (data: any) => {
        alert('Dados alterados com sucesso.');
        location.reload();
        this.upDataForm.reset();
      },
      (error: any) => {
        alert(error); 
      }
    );

  }





  onFieldChange(fieldName: string) {
    this.fieldsChanged[fieldName] = true;

    // Verifica se todos os campos foram alterados
    if (this.fieldsChanged['areaTotal'] && this.fieldsChanged['areaAgricultavel'] && this.fieldsChanged['areaVegetacao']) {
      // Verifica se todos os campos estão preenchidos
      if (
        this.upDataForm.get('areaTotal')?.value &&
        this.upDataForm.get('areaAgricultavel')?.value &&
        this.upDataForm.get('areaVegetacao')?.value
      ) {
        this.isSaveButtonDisabled = false;
      } else {
        this.isSaveButtonDisabled = true;
      }
    } else {
      this.isSaveButtonDisabled = true;
    }
  }

  verificarCamposPreenchidos() {
    const areaTotal = this.upDataForm.get('areaTotal')?.value;
    const areaAgricultavel = this.upDataForm.get('areaAgricultavel')?.value;
    const areaVegetacao = this.upDataForm.get('areaVegetacao')?.value;
  
    // verifica se algum dos campos está vazio
    if (!areaTotal || !areaAgricultavel || !areaVegetacao) {
      this.isSaveButtonDisabled = true; // Desabilita o botão salvar
    } else {
      this.isSaveButtonDisabled = false; // Habilita o botão salvar
    }
  }

  verificarCamposPreenchidos2(){
    const areaTotal = this.upDataForm.get('areaTotal')?.value;
  const areaAgricultavel = this.upDataForm.get('areaAgricultavel')?.value;
  const areaVegetacao = this.upDataForm.get('areaVegetacao')?.value;

  // Verifica se algum dos campos obrigatórios está vazio
  if (areaTotal && areaAgricultavel && areaVegetacao) {
    this.isSaveButtonDisabled = false; // Habilita o botão "Salvar"
  } else {
    this.isSaveButtonDisabled = true; // Desabilita o botão "Salvar"
  }
  }

}
