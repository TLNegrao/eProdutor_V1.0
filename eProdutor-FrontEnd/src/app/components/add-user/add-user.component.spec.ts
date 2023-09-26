import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importe o RouterTestingModule
import { AddUserComponent } from './add-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';

describe('AddUserComponent', () => {
  let fixture: ComponentFixture<AddUserComponent>;
  let component: AddUserComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      providers: [FormBuilder],
      imports: [ HttpClientTestingModule, RouterTestingModule], // Adicione o RouterTestingModule aos imports
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});