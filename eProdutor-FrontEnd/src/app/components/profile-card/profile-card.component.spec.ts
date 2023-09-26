import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe o HttpClientTestingModule
import { ProfileCardComponent } from './profile-card.component';

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileCardComponent],
      imports: [HttpClientTestingModule] // Adicione o HttpClientTestingModule aqui
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deve exibir fazendeiros listados por *ngFor', () => {
    const fazendeiros = fixture.nativeElement.querySelectorAll('.fazendeiro');
    
    // Verificar se a quantidade de fazendeiros no template corresponde à quantidade de fazendeiros no componente
    expect(fazendeiros.length).toBe(component.fazendeiros.length);

    // Verificar se cada fazendeiro exibido corresponde ao fazendeiro no componente
    for (let i = 0; i < fazendeiros.length; i++) {
      expect(fazendeiros[i].textContent).toContain(component.fazendeiros[i].nomeProdutor); // Substitua 'nome' pelo campo correto no seu objeto fazendeiro
      // Adicione verificações adicionais para outros campos do fazendeiro, se necessário
    }
  });






});