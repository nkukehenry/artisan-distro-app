import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit, OnChanges {

  lessons: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.lessons = this.dataService.selectedCourse.lessons;
    console.log("init");
    console.log(this.lessons);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const obj: SimpleChange = changes.courseLessons;
    if (obj.currentValue !== obj.previousValue) {
      this.lessons = obj.currentValue;
      this.dataService.selectedCourse.lessons = this.lessons;
    }
    console.log(this.lessons);
  }

}
