import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importe o RouterTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { PutDashboardComponent } from './put-dashboard.component';

describe('PutDashbordComponent', () => {
  let fixture: ComponentFixture<PutDashboardComponent>;
  let component: PutDashboardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutDashboardComponent],
      providers: [FormBuilder],
      imports: [ HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PutDashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});