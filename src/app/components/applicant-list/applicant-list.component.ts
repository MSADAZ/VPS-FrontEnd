import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = new MatTableDataSource<Applicant>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}



export interface Applicant {
  name: string;
  position: number;
  applicationReceiveddate: string;
  applicationFinisheddate: string;
  status: string;
  actions: string;
}

const ELEMENT_DATA: Applicant[] = [
  {position: 1, name: 'Alan Smith', applicationReceiveddate: '12-09-2017', applicationFinisheddate: '12-09-2017', status: 'In Process', actions: ''},
  {position: 2, name: 'John Brett', applicationReceiveddate: '14-09-20111',applicationFinisheddate: '12-09-2017', status: 'In Process' , actions: ''},
  {position: 3, name: 'Dan Dred', applicationReceiveddate: '13-09-2020', applicationFinisheddate: '12-09-2017', status: 'Pending', actions: 'Payment not received'},
  {position: 4, name: 'Johnson Bruen', applicationReceiveddate: '1-09-2013', applicationFinisheddate: '12-09-2017', status: 'In Process', actions: ' '},
  {position: 5, name: 'Alex Costa', applicationReceiveddate: '2-09-20112', applicationFinisheddate: '12-09-2017', status: 'In Process' , actions: ''},
  {position: 6, name: 'Drek Anderson', applicationReceiveddate: '23-07-2017', applicationFinisheddate: '12-09-2017', status: 'In Process', actions: ''},

];
