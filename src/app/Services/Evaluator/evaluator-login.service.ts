import { AuthServiceService } from './../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EvaluatorLoginService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  evaluatorlogin(userData: any) {
    return this.http.post<any>(this.baseUrl + '/evaluator/evaluatorlogin', userData)
  };

}
