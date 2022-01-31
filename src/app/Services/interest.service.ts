import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private httpClient: HttpClient, private authService: AuthServiceService ,private snackbar: MatSnackBar) { }

  baseUrl = environment.apiUrl;

  getInterest(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/supervisor/interest'
    ).pipe(
      catchError( error => {
        
     
          this.snackbar.open(error.error.detail, "", {duration: 2000});
        
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
