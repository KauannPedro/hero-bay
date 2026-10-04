import { ComponentFixture, TestBed } from '@angular/core/testing';
import { carrinho } from './carrinho';

describe('carrinho', () => {
  let component: carrinho;
  let fixture: ComponentFixture<carrinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [carrinho],
    }).compileComponents();

    fixture = TestBed.createComponent(carrinho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
