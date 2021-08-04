import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnChanges {

  course: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.course = this.dataService.selectedCourse;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const obj: SimpleChange = changes.course;
    if (obj.currentValue !== obj.previousValue) {
      this.course = obj.currentValue;
      this.dataService.selectedCourse = this.course;
    }
    console.log(this.course);
  }

}
