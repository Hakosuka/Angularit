import { Injectable } from '@angular/core';
import { Thread } from './thread';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private threadsUrl = 'Thread';
  constructor(private http: HttpClient) { }

  getThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(this.threadsUrl).pipe(
      
      catchError(this.handleError<Thread[]>('getThreads', []))
    );
  }

  private handleError<T>(failedOp = 'operation', result?: T){
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
