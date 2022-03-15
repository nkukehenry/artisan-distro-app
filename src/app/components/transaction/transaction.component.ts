import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {

  @Input() transaction;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.log(this.transaction);
  }

}
