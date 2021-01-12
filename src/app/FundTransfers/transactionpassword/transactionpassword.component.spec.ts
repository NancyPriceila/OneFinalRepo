import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionpasswordComponent } from './transactionpassword.component';

describe('TransactionpasswordComponent', () => {
  let component: TransactionpasswordComponent;
  let fixture: ComponentFixture<TransactionpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
