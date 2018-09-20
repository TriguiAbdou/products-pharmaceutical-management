import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-dashboard-gpc',
  templateUrl: './dashboard-gpc.component.html',
  styleUrls: ['./dashboard-gpc.component.scss'],
  animations: [routerTransition()]

})
export class DashboardGpcComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor() {
      this.sliders.push(
          {
              imagePath: 'assets/images/slider1.jpeg',
              label: 'BIENVENUE',
          },
          {
              imagePath: 'assets/images/slider2.jpeg',
              label: 'BIENVENUE',
          },
          {
              imagePath: 'assets/images/slider3.jpeg',
              label: 'BIENVENUE',
          }
      );

      this.alerts.push(
          {
              id: 1,
              type: 'success',
              message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates est animi quibusdam praesentium quam, et perspiciatis,
              consectetur velit culpa molestias dignissimos
              voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
          },
          {
              id: 2,
              type: 'warning',
              message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates est animi quibusdam praesentium quam, et perspiciatis,
              consectetur velit culpa molestias dignissimos
              voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
          }
      );
  }

  ngOnInit() {}

  public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }

}
