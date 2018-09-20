import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar-gpc',
  templateUrl: './sidebar-gpc.component.html',
  styleUrls: ['./sidebar-gpc.component.scss']
})
export class SidebarGpcComponent {

  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';

  constructor(private translate: TranslateService, public router: Router) {
      this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
      this.translate.setDefaultLang('en');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }

  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
      this.translate.use(language);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }

}