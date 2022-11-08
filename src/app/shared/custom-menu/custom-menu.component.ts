import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.scss'],
})
export class CustomMenuComponent implements OnInit {
  logoSrc: string = 'assets/images/cambiando-vidas-logotipo.png';
  navList: any[] = [];

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private http: HttpClient,
    private breakPointOserver: BreakpointObserver
  ) {
    this.http.get('/assets/data/navigation.json').subscribe((navList: any) => {
      this.navList = navList;
    });
  }

  ngOnInit(): void {
    this.breakPointOserver
      .observe(['(max-width: 800px)'])
      .subscribe((res: any) => {
        console.log(res);
        let button = document.querySelector('.toggle-button') as HTMLElement;
        let menu = document.querySelector('.menu') as HTMLElement;
        let sidebar = document.querySelector('.sidebar') as HTMLElement;

        button;
        if (res.matches) {
          menu.style.display = 'none';
          button.style.display = 'flex';
        } else {
          menu.style.display = 'flex';
          button.style.display = 'none';
          if (this.sidenav) this.sidenav.close();
        }
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let navbar = document.querySelector('.navbar') as HTMLElement;
    let banner = document.querySelector('.banner') as HTMLElement;
    if (window.pageYOffset > navbar.clientHeight && window.pageYOffset !== 0) {
      navbar.style.backgroundColor = 'white';
      banner.classList.add('visuallyhidden');
      banner.addEventListener(
        'transitionend',
        function (e) {
          banner.classList.add('hidden');
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    } else {
      navbar.style.backgroundColor = 'transparent';
      banner.classList.remove('hidden');
      banner.classList.remove('visuallyhidden');
    }
  }
}
