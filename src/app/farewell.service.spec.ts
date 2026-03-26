import { TestBed } from '@angular/core/testing';
import { FarewellService } from './farewell.service';

describe('FarewellService', () => {
  let service: FarewellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarewellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a farewell with the provided name', () => {
    expect(service.getFarewell('Alice')).toBe('Goodbye, Alice!');
  });

  it('should fall back to "stranger" for an empty string', () => {
    expect(service.getFarewell('')).toBe('Goodbye, stranger!');
  });

  it('should trim whitespace before checking for empty input', () => {
    expect(service.getFarewell('   ')).toBe('Goodbye, stranger!');
  });
});
