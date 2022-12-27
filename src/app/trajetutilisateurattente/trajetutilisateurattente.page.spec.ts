import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrajetutilisateurattentePage } from './trajetutilisateurattente.page';

describe('TrajetutilisateurattentePage', () => {
  let component: TrajetutilisateurattentePage;
  let fixture: ComponentFixture<TrajetutilisateurattentePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetutilisateurattentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrajetutilisateurattentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
