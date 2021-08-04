import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class NoticeboardService extends BaseService {

  //the baseservice contains all endpoints and logger + error handler
  constructor(private http: HttpClient) {
    super();
  }

  getNoticeBoardList(): Observable<any> {
    const studentId = this.student.id;
    return this.http.get(this.getNoticeBoardUrl(studentId))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getKnowledgeHubList', []))
      );
  }


}
