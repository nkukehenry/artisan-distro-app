import { Component, AfterViewInit, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/course/courses.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnChanges {

  @Input() courses: any;
  constructor(
    private courseService: CoursesService,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const obj: SimpleChange = changes.courses;
    if (obj.currentValue !== obj.previousValue) {
      this.courses = obj.currentValue;
    }
  }

  doRefresh(event) {
    console.log(event);
  }

  selectCourse(course) {
    this.dataService.selectedCourse = course;
    this.router.navigate(['/course-details']);
  }

}
