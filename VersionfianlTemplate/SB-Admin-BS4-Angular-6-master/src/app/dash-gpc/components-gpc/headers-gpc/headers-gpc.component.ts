import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderAdminService } from '../../../dash-admin/components-admin/header-admin/header-admin.service';

@Component({
  selector: 'app-headers-gpc',
  templateUrl: './headers-gpc.component.html',
  styleUrls: ['./headers-gpc.component.scss']
})
export class HeadersGpcComponent implements OnInit {

  pushRightClass: string = 'push-right';
  users:any;
  constructor(private translate: TranslateService, public router: Router,public headerAdminService:HeaderAdminService) {

      this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
      this.translate.setDefaultLang('en');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

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

  ngOnInit() {
      this.users = this.headerAdminService.getCurrentUser();
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

  onLoggedout() {
      localStorage.removeItem('token');
  }

  changeLang(language: string) {
      this.translate.use(language);
  }

}
