import { Component, NgZone, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'NgAffinityWeb';
  isHome: boolean = false;
  modalContact: boolean = false;
  menuItems: MenuItem[] = [];

  isOpen: boolean = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  constructor(private router: Router, private ngZone: NgZone){
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHome = event.urlAfterRedirects.includes('/home');
      });
  }

  ngOnInit(): void {
    AOS.init();
    
    if( this.router.url.includes("/home")){
      this.isHome = true;
    }else{
      this.isHome = false;
    }

    
  }

  navigateAndScroll(id: string) {
    if (!this.router.url.includes("home")) {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.scrollToSection(id);
        }, 100);
      });
    } else {
      setTimeout(() => {
          this.scrollToSection(id);
        }, 100);
      
    }
    this.isOpen = false;
  }

  scrollToSection(id: string) {
    this.ngZone.runOutsideAngular(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
