import { Injectable } from '@angular/core';
import { Account } from './account';
import { LoginComponent } from './login/login.component';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const httpOpts = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private wsUrl = 'https://cc18594.whatsalon.com/api/Account';
  constructor(private hClient: HttpClient) { }

  registerUser(newUser: Account): Observable<Account> {
    return this.hClient.post<Account>(`${this.wsUrl}/register`, newUser,).pipe(
      catchError(this.handleError('registerUser', []))
    );
  }

  login(emailAddr: string, pass: string) {
    //TODO: Finish login logic
    return this.hClient.post<any>(`${this.wsUrl}/login`, {emailAddr, pass}).pipe(
      map(Account => {
        if(success){

        }
      })
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
