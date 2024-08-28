/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalConstants } from '../Global';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nav_bar : any;

    constructor(public location: Location, private element : ElementRef, private route: Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.nav_bar = navbar.getElementsByClassName("navbar")[0]
        this.scrollClass()
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }
    isHome() {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/login' ) {
            return false;
        }
        else {
            return true;
        }
    }
    isDocumentation() {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
    scrollClass() : void {
        const nav_bar= this.nav_bar 
    window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop ) {
        nav_bar.classList.add("navbar-colored");
        nav_bar.classList.remove("navbar-transparent");
    } 
    else {
        nav_bar.classList.add("navbar-transparent");
        nav_bar.classList.remove("navbar-colored");
    }
};
    
    }
    logout(){
        sessionStorage.removeItem('nom')
        sessionStorage.removeItem('prenom')
        GlobalConstants.isLogged = false
        this.route.navigate(['/login'])
    }
}
