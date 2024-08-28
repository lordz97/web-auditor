import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auditor } from './shared/Auditor';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private api='http://localhost:8080/auditor'
  constructor(private http: HttpClient) { }
  authenticate(username: string, password: string):Observable<Auditor>{
    return this.http.get<Auditor>(`${this.api}/trouve/${username}&${password}`)
  }
}
