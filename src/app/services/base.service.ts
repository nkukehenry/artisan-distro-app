// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    public baseUrl = 'https://ecsacop-sandbox.somesa.ug/api/';
    student: any = {};
    constructor() {
        this.student = {
            id: 2752,
            collegeId: 24
        };
    }
    //Endpoints

    //auth
    public postLoginUrl = () => `${this.baseUrl}user/login`;
    public postRegsitrationUrl = () => `${this.baseUrl}user/register`;

    //Courses
    public getFeaturedCoursesUrl = () => `${this.baseUrl}course/getFeaturedCourses`;
    public getUpcomingCoursesUrl = () => `${this.baseUrl}course/getUpcomingCourses`;
    public getStudentActiveUrl = (studentId) => `${this.baseUrl}course/getStudentActive/${studentId}`;
    public getPastCoursesUrl = (studentId) => `${this.baseUrl}course/getPastCourses/${studentId}`;
    public getCourseDetailsUrl = (courseId) => `${this.baseUrl}course/get/${courseId}`;
    public postCourseEnrollment = () => `${this.baseUrl}course/enroll`;
    public getCourseLecturesUrl = (userId, courseId) => `${this.baseUrl}lectures/course/${userId}/${courseId}`;

    //lectures
    public postFetchLecturesDetailsUrl = () => `${this.baseUrl}lectures/course`;
    public postSubmitExercise = () => `${this.baseUrl}lectures/submitExercise`;

    //knowledge Hub
    public getKnowledgeHubUrl = (studentId, collegeId) => `${this.baseUrl}knowledgehub/get/${studentId}/${collegeId}`;

    //knowledge Hub
    public getNoticeBoardUrl = (studentId) => `${this.baseUrl}noticeboard/get/${studentId}`;

    //forums
    public postFetchForums = () => `${this.baseUrl}forums/get`;
    public postCreateForumTopic = () => `${this.baseUrl}forums/save`;
    public postDeleteForumTopic = () => `${this.baseUrl}forums/deleteTopic`;
    public getTopicComments = (courseId, userId, topicId) => `${this.baseUrl}forums/comments/${courseId}/${userId}/${topicId}`;
    // eslint-disable-next-line max-len
    public getDeleteTopicComments = (courseId, userId, topicId, commentId) => `${this.baseUrl}forums/comments/${courseId}/${userId}/${topicId}/${commentId}`;
    //end endpoints

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    /** Log a  message --- centralises log switching*/
    public log(message: string) {
        console.log(message);
    }

}
