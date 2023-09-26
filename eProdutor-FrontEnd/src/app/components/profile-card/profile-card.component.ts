import { Component, OnInit } from '@angular/core';
import { Fazendeiro } from 'src/app/model/fazendeiro.model';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  deleteInput: string = '';


  fazendeiros: Fazendeiro[] = [];
  fazendeiro!: any;


  fazendeiroToDeleteId: string| null = null;

  constructor(
    private user: DeliveryService,
  ) { }

  ngOnInit(): void {
    this.getall();
  }

  resetModal() {
    this.deleteInput = ''; 
    this.fazendeiroToDeleteId = null; 
  }

  getall(){
    this.user.getAll().subscribe((fazendeiro) => (this.fazendeiros = fazendeiro));
  }

  setFazendeiroToDeleteId(id: any) {
    this.fazendeiroToDeleteId = id;
  }

  deleteUser() {
    if (this.fazendeiroToDeleteId) {
      this.user.delete(this.fazendeiroToDeleteId).subscribe((res) => {
        console.log("Fazendeiro excluído com sucesso!");
        this.resetModal();
        this.getall();
        
      });
    }
  }

}
