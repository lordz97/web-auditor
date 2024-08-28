/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';
import { Auditor } from 'src/app/shared/Auditor';
import { GlobalConstants } from 'src/app/shared/Global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='lordz97'
  password='lordz'
  date: Date = new Date()
  constructor(private authenticate: AuthenticateService, private route: Router) { }

  ngOnInit(): void {
    
  }

  login(){
    this.authenticate.authenticate(this.username, this.password).subscribe({next: (auditor:Auditor)=>{ sessionStorage.setItem('nom', auditor.nom); sessionStorage.setItem('prenom', auditor.prenom); GlobalConstants.isLogged = true; this.route.navigate(['/home']) },error: err=> console.error(err)})
    
  }
}
