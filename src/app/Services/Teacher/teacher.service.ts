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
export class TeacherService {

  constructor(private httpClient: HttpClient, private authService: AuthServiceService ,private snackbar: MatSnackBar) { }

  baseUrl = environment.apiUrl;



  getTeacher(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/teacher/teacher'
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

  getSingleTeacher(id:any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/teacher/teacher/'+id
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

  createTeacher(userData: any) {
    return this.httpClient.post<any>(this.baseUrl + '/teacher/teacher', userData
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

  updateTeacher(userData: any) {
    return this.httpClient.put<any>(this.baseUrl + '/teacher/teacher', userData
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


  createProject(userData: any) {
    return this.httpClient.post<any>(this.baseUrl + '/teacher/project', userData
    ).pipe(
      catchError( error => {
        
       
       
          this.snackbar.open(error.error.detail, "", {duration: 2000});
       
        return this.processError(error)
      })
    )
  };



  getAllProjects(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/teacher/project'
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



  getTeacherProjects(id:any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/teacher/teacherproject/'+id
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


  createMeeting(id: any) {
    return this.httpClient.post<any>(this.baseUrl + '/teacher/meeting', id
    ).pipe(
      catchError( error => {
        console.log(error)
       
       
          this.snackbar.open(error.error.detail, "", {duration: 2000});
       
        return this.processError(error)
      })
    )
  };

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    }
    return throwError(message);
  }

}
