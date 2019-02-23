import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageToStaffDialogComponent } from './message-to-staff-dialog.component';

describe('MessageToStaffDialogComponent', () => {
  let component: MessageToStaffDialogComponent;
  let fixture: ComponentFixture<MessageToStaffDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageToStaffDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToStaffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
