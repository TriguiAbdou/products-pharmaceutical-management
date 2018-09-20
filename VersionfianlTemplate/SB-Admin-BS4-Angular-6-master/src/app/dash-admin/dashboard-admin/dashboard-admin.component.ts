import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
  animations: [routerTransition()]

})
export class DashboardAdminComponent implements OnInit {

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


  //right
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
    ];
    
  public doughnutChartData: number[] = [350, 450, 100];
   public doughnutChartType: string = 'doughnut';


   // Left
   public pieChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';
}
