import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  getGreeting(name: string): string {
    const displayName = name.trim() || 'stranger';
    return `Hello, ${displayName}!`;
  }
}
