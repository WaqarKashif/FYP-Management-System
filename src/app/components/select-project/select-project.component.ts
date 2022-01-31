import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/Services/Student/student.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.scss']
})
export class SelectProjectComponent implements OnInit {

  constructor(private student:StudentService, private authService:AuthServiceService, private router: Router,  private snackbar: MatSnackBar) {
    console.log(this.projectID)
    if(!this.projectID) {
      this.displayedColumns.push("joinGroup")
    }
  }
  

  displayedColumns: any[] = ["number","project_name","teacher","description"];
  dataSource: any;
  isLoading = true;
  interestID = this.authService.userInterest;
  projectID = this.authService.projectID;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


    // Get all the users from user service
  fetchAllProjects(id:any) {
    return this.student.getProjects(id).subscribe(
      (res: any) => {
      
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => (this.isLoading = false)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  onClick(id:any){
    let mainObject = {
      id: this.authService.userid,
      project_id: id
    }
    this.student.joinGroup(mainObject).subscribe(resp => {
      console.log(resp)
      localStorage.setItem('projectID', id);
      this.authService.projectID = id;
      this.snackbar.open('You have joined the group', '', {duration: 1000})
      this.router.navigate(['/', 'view-group']);
    });
  }

  ngOnInit(): void {
    this.fetchAllProjects(this.interestID)
  }

}
