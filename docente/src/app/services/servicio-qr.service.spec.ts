import { TestBed } from '@angular/core/testing';

import { ServicioQRService } from './servicio-qr.service';

describe('ServicioQRService', () => {
  let service: ServicioQRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioQRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
