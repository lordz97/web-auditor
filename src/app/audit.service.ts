import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audit } from './shared/audit';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  private api='http://localhost:8080/audit'
  constructor(private http: HttpClient
    ) { }
  public getAudits(): Observable<Audit[]>{
    return this.http.get<Audit[]>(`${this.api}`)
  }
  public addAudit(audit: Audit): Observable<Audit>{
    return this.http.post<Audit>(`${this.api}/add`, audit)
  }
  public getAuditByName(name: string): Observable<Audit[]>{
    return this.http.get<Audit[]>(`${this.api}/find/${name}`)
  }
}
