import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private searchQuerySource = new BehaviorSubject<string>('');  // Default to empty string
  searchQuery$ = this.searchQuerySource.asObservable();  // Observable to subscribe to

  constructor() {}

  // Method to update the search query
  updateSearchQuery(query: string): void {
    this.searchQuerySource.next(query);
  }
}
