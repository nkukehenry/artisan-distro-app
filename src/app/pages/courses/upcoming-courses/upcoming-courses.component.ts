import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from 'src/app/services/course/courses.service';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss'],
})
export class UpcomingCoursesComponent implements OnInit {

  @Output() courses = new EventEmitter<any>();
  upcomingCourses = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.getUpcomingCourses();
  }

  getUpcomingCourses() {
    this.courseService.getUpcomingCourses().subscribe((response) => {
      this.upcomingCourses = response.message;
    });
    this.courses.emit(this.upcomingCourses);
  }

}

