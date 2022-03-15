import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  @Input() order;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.log(this.order);
  }

}
