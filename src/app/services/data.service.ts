import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public selectedCourse: any;
  public selectedLesson: any;
  public selectedCategory: any;
  public selectedExercise: any;

  constructor() { }
}
