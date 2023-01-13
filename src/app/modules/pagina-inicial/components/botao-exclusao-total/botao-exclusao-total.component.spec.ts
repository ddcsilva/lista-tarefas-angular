import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoExclusaoTotalComponent } from './botao-exclusao-total.component';

describe('BotaoExclusaoTotalComponent', () => {
  let component: BotaoExclusaoTotalComponent;
  let fixture: ComponentFixture<BotaoExclusaoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoExclusaoTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoExclusaoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
