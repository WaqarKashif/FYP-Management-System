import { Injectable } from '@angular/core';
import { AuthServiceService } from './../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient, private authService: AuthServiceService ,private snackbar: MatSnackBar) { }

  baseUrl = environment.apiUrl;

  getStudent(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/student/student'
    ).pipe(
      catchError( error => {
        
        if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
          this.snackbar.open("Your session has been expired.", "", {duration: 2000});
          this.authService.logout();
        }else{
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        }
        return this.processError(error)
      })
    )
  }

  getProjects(id:any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/student/studentInterest?interest_id='+id
    ).pipe(
      catchError( error => {
        
        if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
          this.snackbar.open("Your session has been expired.", "", {duration: 2000});
          this.authService.logout();
        }else{
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        }
        return this.processError(error)
      })
    )
  }


  getSingleStudent(id:any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/student/student/'+id
    ).pipe(
      catchError( error => {
        
        if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
          this.snackbar.open("Your session has been expired.", "", {duration: 2000});
          this.authService.logout();
        }else{
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        }
        return this.processError(error)
      })
    )
  }

  createStudent(userData: any) {
    return this.httpClient.post<any>(this.baseUrl + '/student/student', userData
    ).pipe(
      catchError( error => {
        
        if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
          this.snackbar.open("Your session has been expired.", "", {duration: 2000});
          this.authService.logout();
        }else{
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        }
        return this.processError(error)
      })
    )
  };

  updateStudent(userData: any) {
    return this.httpClient.put<any>(this.baseUrl + '/student/student', userData
    ).pipe(
      catchError( error => {
        
        if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
          this.snackbar.open("Your session has been expired.", "", {duration: 2000});
          this.authService.logout();
        }else{
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        }
        return this.processError(error)
      })
    )
  };


  joinGroup(userData:any){
    return this.httpClient.put<any>(this.baseUrl + '/student/projectgroupjoin', userData
    ).pipe(
      catchError( error => {
        
        if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
          this.snackbar.open("Your session has been expired.", "", {duration: 2000});
          this.authService.logout();
        }else{
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        }
        return this.processError(error)
      })
    )
  };


  getGroupMembers(id:any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/student/groupmember/'+id
    ).pipe(
      catchError( error => {
        
        if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
          this.snackbar.open("Your session has been expired.", "", {duration: 2000});
          this.authService.logout();
        }else{
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        }
        return this.processError(error)
      })
    )
  }


 getMessageNotification(projectID:any): Observable<any> {
  return this.httpClient.get<any>(this.baseUrl + '/student/getnotification/'+projectID
  ).pipe(
    catchError( error => {
      
      if((error.status === 403|| error.status === 401) && error.error.detail === "Invalid token.") {
        this.snackbar.open("Your session has been expired.", "", {duration: 2000});
        this.authService.logout();
      }else{
        this.snackbar.open(error.error.detail, "", {duration: 2000});
      }
      return this.processError(error)
    })
  )
}




  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    }
    return throwError(message);
  }

}
