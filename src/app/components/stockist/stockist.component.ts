import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stockist',
  templateUrl: './stockist.component.html',
  styleUrls: ['./stockist.component.scss'],
})
export class StockistComponent implements OnInit {

  @Input() stockist;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.log(this.stockist);
  }

}
