import { Component, OnInit, Renderer2 } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  
  isCnpjSelected = true; 
  isCpfSelected = true; 

  registerForm!: FormGroup;

  cpf: string = '';
  cnpj: string = '';
  nomeProdutor!: string;
  nomeFazenda!: string;
  cidade!: string;
  estado!: string;
  areaTotal!: string;
  areaAgricultavel!: string;
  areaVegetacao!: string;
  culturasPlantadas: string[] = [];

  form!: FormGroup;
  submitted = false;

  selectedCulturasPlantadas: string[] = [];
  selectedCheck!: string[];

  constructor(
    private user: DeliveryService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private rota: Router,
  ) {  }

  ngOnInit(): void {

    

    this.registerForm = this.formBuilder.group({
      cnpj: [{ value: '', disabled: false }],
      cpf: [{ value: '', disabled: false }],
      nomeProdutor: ['', [Validators.required]],
      nomeFazenda: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      areaTotal: ['', [Validators.required]],
      areaAgricultavel: ['', [Validators.required]],
      areaVegetacao: ['', [Validators.required]],
      tipoDocumento: [''],
      culturasPlantadas:([
        { name: 'Soja', selected: false },
        { name: 'milho', selected: false },
        { name: 'algodao', selected: false },
        { name: 'cafe', selected: false },
        { name: 'cana', selected: false }
      ])
    });  

  }



  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }



  formatarCPF(cpf: string): string {
    console.log('CPF original:', cpf);
    const cpfFormatado = cpf.replace(/[^0-9]/g, '');
    console.log('CPF formatado:', cpfFormatado);
    return cpfFormatado;
  }  
  
  formatarCNPJ(cnpj: string): string {
    console.log('CNPJ original:', cnpj);
    const cnpjFormatado = cnpj.replace(/[^0-9]/g, '');
    console.log('CNPJ formatado:', cnpjFormatado);
    return cnpjFormatado;
  }

  toggleCultura(cultura: string) {
    const index = this.culturasPlantadas.indexOf(cultura);
    if (index === -1) {
      this.culturasPlantadas.push(cultura);
    } else {
      this.culturasPlantadas.splice(index, 1);
    }
  }

  onTipoDocumentoChange(tipo: any) {
    if (tipo === 'cnpj') {
      this.isCnpjSelected = true;
      this.isCpfSelected = false;
      this.registerForm.get('tipoDocumento')?.setValue('cnpj');
      this.registerForm.get('cpf')?.disable();
      this.registerForm.get('cnpj')?.enable();
    } else {
      this.isCnpjSelected = false;
      this.isCpfSelected = true;
      this.registerForm.get('tipoDocumento')?.setValue('cpf');
      this.registerForm.get('cnpj')?.disable();
      this.registerForm.get('cpf')?.enable();
    }
  }


  enviarFormulario(){
    const fazendeiro = {
      cpf: this.cpf ? this.formatarCPF(this.cpf) : '', 
      cnpj: this.cnpj ? this.formatarCNPJ(this.cnpj) : '', 
      nomeProdutor: this.nomeProdutor,
      nomeFazenda: this.nomeFazenda,
      cidade: this.cidade,
      estado: this.estado,
      areaTotal: this.areaTotal,
      areaAgricultavel: this.areaAgricultavel,
      areaVegetacao: this.areaVegetacao,
      culturasPlantadas: this.culturasPlantadas
    };
    console.log('fazendeiroADDuser', fazendeiro)
    this.user.registerUser(fazendeiro).subscribe(() => { 
      alert('Usuário registrado com sucesso!');
      this.registerForm.reset();
      this.selectedCulturasPlantadas = [];
      location.reload();
    },

    (error: any) => {
      if (error && error.error && error.error.message) {
        alert(error.error.message);
      } else {
        alert('Erro desconhecido');
      }
    }    
    );
  }

  onReset(){
    location.reload();
    this.registerForm.reset();
  }

}
