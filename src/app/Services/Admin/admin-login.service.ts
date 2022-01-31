import { AuthServiceService } from './../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AdminLoginService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  adminlogin(userData: any) {
    return this.http.post<any>(this.baseUrl + '/supervisor/login', userData)
  };

}
