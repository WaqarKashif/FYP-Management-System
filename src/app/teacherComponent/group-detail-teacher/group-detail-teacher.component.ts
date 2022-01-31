import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';

@Component({
  selector: 'app-group-detail-teacher',
  templateUrl: './group-detail-teacher.component.html',
  styleUrls: ['./group-detail-teacher.component.scss']
})
export class GroupDetailTeacherComponent implements OnInit {


  constructor(private teacher:TeacherService ) { }

  displayedColumns: any[] = ["number","student_name","student_interest"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;




    // Get all the users from user service


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  ngOnInit() {
    // this.fetchgroupsUnderTeacher();
  }
}
