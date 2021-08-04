import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from 'src/app/services/course/courses.service';

@Component({
  selector: 'app-past-courses',
  templateUrl: './past-courses.component.html',
  styleUrls: ['./past-courses.component.scss'],
})
export class PastCoursesComponent implements OnInit {
  @Output() courses = new EventEmitter<any>();
  pastCourses = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.getPastCourses();
  }

  getPastCourses() {
    this.courseService.getPastCourses().subscribe((response) => {
      this.pastCourses = response.message;
    });
    this.courses.emit(this.pastCourses);
  }

}
