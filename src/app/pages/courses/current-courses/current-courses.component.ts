import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from 'src/app/services/course/courses.service';

@Component({
  selector: 'app-current-courses',
  templateUrl: './current-courses.component.html',
  styleUrls: ['./current-courses.component.scss'],
})
export class CurrentCoursesComponent implements OnInit {
  @Output() courses = new EventEmitter<any>();
  currentCourses = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.getCurrentCourses();
  }

  getCurrentCourses() {
    this.courseService.getCurrentCourses().subscribe((response) => {
      this.currentCourses = response.message;
    });
    this.courses.emit(this.currentCourses);
  }

}
