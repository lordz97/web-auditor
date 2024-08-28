/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { siteWeb } from 'src/app/shared/siteWeb';

@Component({
  selector: 'app-name',
  templateUrl: './appname.component.html',
  styleUrls: ['./appname.component.css']
})

export class AppnameComponent implements OnInit {

  @Output() apk = new EventEmitter()
  appWeb:siteWeb = {name:'We Like to ...', url:'https://0a0900c70385863ac1722d690080000a.web-security-academy.net/'}
  test : Date = new Date();
  focus: unknown;
  focus1: unknown;
  constructor() { }

  ngOnInit(): void {
  }

  enreg(){
    this.apk.emit(this.appWeb)
  }
}

