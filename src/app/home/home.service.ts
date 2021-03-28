import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private index: Subject<number> = new Subject();

  constructor() {
  }

  get slideIndex$(): Observable<number> {
    return this.index.asObservable();
  }

  set slideIndex(val: number) {
    this.index.next(val);
  }
}
