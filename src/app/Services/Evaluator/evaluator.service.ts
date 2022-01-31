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
export class EvaluatorService {

  constructor(private httpClient: HttpClient, private authService: AuthServiceService ,private snackbar: MatSnackBar) { }

  baseUrl = environment.apiUrl;






  getEvaluator(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/evaluator/evaluator'
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



  getSingleEvaluator(id:any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/evaluator/evaluator/'+id
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

  createEvaluator(userData: any) {
    return this.httpClient.post<any>(this.baseUrl + '/evaluator/evaluator', userData
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

  updateEvaluator(userData: any) {
    return this.httpClient.put<any>(this.baseUrl + '/evaluator/evaluator', userData
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

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    }
    return throwError(message);
  }

  submitEvaluationForm(evaluationForm: any) {
    return this.httpClient.post<any>(this.baseUrl + '/evaluator/evaluation', evaluationForm
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

}
