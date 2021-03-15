import { TestBed } from '@angular/core/testing';

import { GalleryPhotoService } from './gallery-photo.service';

describe('GalleryPhotoService', () => {
  let service: GalleryPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
