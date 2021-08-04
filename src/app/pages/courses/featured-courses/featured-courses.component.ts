import { Component, EventEmitter, OnInit, Output, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/course/courses.service';

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.scss'],
})
export class FeaturedCoursesComponent implements OnInit {
  //@Output() courses = new EventEmitter<any>();
  featuredCourses = [];
  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.getFeaturedCourses();
  }
  getFeaturedCourses() {
    this.courseService.getFeaturedCourses().subscribe((response) => {
      console.log('courses in featurred');
      console.log(response.message);
      this.featuredCourses = response?.message || [];
      setTimeout(() => {
        this.featuredCourses.push(this.featuredCourses[0]);
        this.featuredCourses.push(this.featuredCourses[1]);
      }, 5000);
    });
    //this.courses.emit(this.featureCourses);
  }

  doRefresh(event) {
    this.getFeaturedCourses();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

}
