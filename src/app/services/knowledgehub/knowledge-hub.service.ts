import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeHubService extends BaseService {

  //the baseservice contains all endpoints and logger + error handler
  constructor(private http: HttpClient) {
    super();
  }

  getKnowledgeHubList(): Observable<any> {
    const studentId = this.student.id; const collegeId = this.student.collegeId;
    return this.http.get(this.getKnowledgeHubUrl(studentId, collegeId))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getKnowledgeHubList', []))
      );
  }


}
