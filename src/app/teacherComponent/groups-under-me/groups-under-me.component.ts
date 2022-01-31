import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from 'src/app/Services/Teacher/teacher.service';

@Component({
  selector: 'app-groups-under-me',
  templateUrl: './groups-under-me.component.html',
  styleUrls: ['./groups-under-me.component.scss']
})
export class GroupsUnderMeComponent implements OnInit {
  constructor(private teacher:TeacherService) { }

  displayedColumns: any[] = ["number","student_name","student_interest"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  users: any = [];
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


