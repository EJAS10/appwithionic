import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaIntegrationPage } from './mapa-integration.page';

describe('MapaIntegrationPage', () => {
  let component: MapaIntegrationPage;
  let fixture: ComponentFixture<MapaIntegrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaIntegrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaIntegrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
