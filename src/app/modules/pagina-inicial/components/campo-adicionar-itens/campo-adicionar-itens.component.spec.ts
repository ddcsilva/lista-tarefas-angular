import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoAdicionarItensComponent } from './campo-adicionar-itens.component';

describe('CampoAdicionarItensComponent', () => {
  let component: CampoAdicionarItensComponent;
  let fixture: ComponentFixture<CampoAdicionarItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoAdicionarItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoAdicionarItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
