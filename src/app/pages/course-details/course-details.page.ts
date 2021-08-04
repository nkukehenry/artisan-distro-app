import { Component, EventEmitter, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CoursesService } from 'src/app/services/course/courses.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {

  courseLessons = new EventEmitter<any>();
  course: any = [];
  lessons: any = [];

  constructor(
    private router: MenuController,
    private dataService: DataService,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.course = this.dataService.selectedCourse;
    console.log(this.course);
    //the ftn below adds lessons to the selected course
    this.getLectures();
  }

  getLectures() {
    const courseId = this.course.id;
    this.coursesService.getCourseLectures(courseId).subscribe((response) => {
      console.log(response);
      this.dataService.selectedCourse.lessons = response.message.timeline_lectures['1'];
      this.courseLessons.emit(this.dataService.selectedCourse.lessons);
    });
  }


}
