import { TestBed } from '@angular/core/testing';
import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a greeting with the provided name', () => {
    expect(service.getGreeting('Alice')).toBe('Hello, Alice!');
  });

  it('should fall back to "stranger" for an empty string', () => {
    expect(service.getGreeting('')).toBe('Hello, stranger!');
  });

  it('should trim whitespace before checking for empty input', () => {
    expect(service.getGreeting('   ')).toBe('Hello, stranger!');
  });
});
