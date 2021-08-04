// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends BaseService {

  //the baseservice contains all endpoints and logger + error handler

  constructor(private http: HttpClient) {
    super();
  }

  getFeaturedCourses(): Observable<any> {
    return this.http.get(this.getFeaturedCoursesUrl())
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getFeaturedCourses', []))
      );
  }

  getCurrentCourses(): Observable<any> {
    return this.http.get(this.getFeaturedCoursesUrl())
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getFeaturedCourses', []))
      );
  }

  getUpcomingCourses(): Observable<any> {
    return this.http.get(this.getFeaturedCoursesUrl())
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getFeaturedCourses', []))
      );
  }

  getPastCourses(): Observable<any> {
    return this.http.get(this.getFeaturedCoursesUrl())
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getFeaturedCourses', []))
      );
  }

  getCourseDetails(courseId): Observable<any> {

    return this.http.get(this.getCourseDetailsUrl(courseId))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getCourseDetails', []))
      );
  }

  getCourseLectures(courseId): Observable<any> {
    const studentId = this.student.id; const collegeId = this.student.collegeId;
    return this.http.get(this.getCourseLecturesUrl(studentId, courseId))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getCourseDetails', []))
      );
  }

}
