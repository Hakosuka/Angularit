import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUser: Observable<Account>;
  
  constructor(private http: HttpClient) { }

  
}
