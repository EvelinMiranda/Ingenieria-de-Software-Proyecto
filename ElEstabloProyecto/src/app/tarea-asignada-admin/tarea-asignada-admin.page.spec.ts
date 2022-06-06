import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TareaAsignadaAdminPage } from './tarea-asignada-admin.page';

describe('TareaAsignadaAdminPage', () => {
  let component: TareaAsignadaAdminPage;
  let fixture: ComponentFixture<TareaAsignadaAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaAsignadaAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TareaAsignadaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
