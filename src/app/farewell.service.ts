import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FarewellService {
  getFarewell(name: string): string {
    const displayName = name.trim() || 'stranger';
    return `Goodbye, ${displayName}!`;
  }
}
