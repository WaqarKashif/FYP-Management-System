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
export class EvaluatorAdminService {

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

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    }
    return throwError(message);
  }

}
