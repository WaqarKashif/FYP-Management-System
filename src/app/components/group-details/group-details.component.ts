import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { StudentService } from 'src/app/Services/Student/student.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

  constructor(private student:StudentService, private authService:AuthServiceService, private router: Router) { }


  studentID = this.authService.userid
  projectID = this.authService.projectID


  displayedColumns: string[] = ["student_name","email","phone"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;




    // Get all the users from user service
  fetchAllGroupMembers(id:any) {
    return this.student.getGroupMembers(id).subscribe(
      (res: any) => {
      
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => (this.isLoading = false)
    );
  }

  message:any[] = []; 
  time = "";
  notifications: any[] = []

  fetchMeeting(id:any) {
    return this.student.getMessageNotification(id).subscribe(
      (res: any) => {
        this.notifications = res;
      console.log(res)
       
      }
    );
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  ngOnInit() {
    this.fetchAllGroupMembers(this.studentID);
    this.fetchMeeting(this.projectID)
  }










}
