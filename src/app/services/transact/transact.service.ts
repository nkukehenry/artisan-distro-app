import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class TransactService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }


  getTransactions(limit = 25, id = 1): Observable<any> {
    return this.http.get(this.getClientOrdersUrl(id, limit))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getTransactions', []))
      );
  }

  postOrder(request): Observable<any> {
    return this.http.post(this.postClientOrderUrl(), request)
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getTransactions', []))
      );
  }


}
