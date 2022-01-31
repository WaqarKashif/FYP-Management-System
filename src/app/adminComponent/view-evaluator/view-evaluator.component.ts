import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EvaluatorAdminService } from 'src/app/Services/Admin/evaluator-admin.service';

@Component({
  selector: 'app-view-evaluator',
  templateUrl: './view-evaluator.component.html',
  styleUrls: ['./view-evaluator.component.scss']
})
export class ViewEvaluatorComponent implements OnInit {

  constructor(private evaluator:EvaluatorAdminService ) { }

  displayedColumns: any[] = ["number","evaluator_name","email","address","phone","created_at","updated_at"];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;




    // Get all the users from user service
  fetchAllSEvaluator() {
    return this.evaluator.getEvaluator().subscribe(
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

  ngOnInit() {
    this.fetchAllSEvaluator();
  }


}
