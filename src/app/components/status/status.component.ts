import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = ['position', 'stage', 'applicationReceiveddate', 'applicationCompletededdate', 'status', 'reason'];
  dataSource = new MatTableDataSource<Status>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  control: FormControl = new FormControl('');
  searchField;
  clearSearchField() {
    this.searchField = '';
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface Status {
  stage: string;
  position: number;
  applicationReceiveddate: string;
  applicationCompletededdate: string;
  status: string;
  reason: string;
}

const ELEMENT_DATA: Status[] = [
  {position: 1, stage: 'Front Desk', applicationReceiveddate: '12-09-2017', applicationCompletededdate: '12-09-2017', status: 'In Process', reason: ''},
  {position: 2, stage: 'Representative', applicationReceiveddate: '14-09-20111',applicationCompletededdate: '12-09-2017', status: 'In Process' , reason: ''},
  {position: 3, stage: 'Finance', applicationReceiveddate: '13-09-2020', applicationCompletededdate: '12-09-2017', status: 'Pending', reason: 'Payment not received'},
  {position: 4, stage: 'Authority', applicationReceiveddate: '1-09-2013', applicationCompletededdate: ' ', status: ' ', reason: ' '},
  {position: 5, stage: 'HQAuthority', applicationReceiveddate: '2-09-20112', applicationCompletededdate: ' ', status: ' ' , reason: ''},
  {position: 6, stage: 'HQRep', applicationReceiveddate: '23-07-2017', applicationCompletededdate: ' ', status: ' ', reason: ''},


];
