import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';
import { RightbarComponent } from "../rightbar/rightbar.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, KnobModule, FormsModule, ChartModule, RightbarComponent]
})
export class MainComponent {
dat=[{
    value:98,
    lable:'data1'
},
{ value:56,
    lable:'data2'},
{ value:54,
    lable:'data3'},
{ value:37,
    lable:'data4'}
];
    
data:any;
options:any;
ngOnInit(){
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  this.data = {
    labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997','1998','1999','2000','2001','2002','2003'
  ,'2004','2005','2006','2007','2008','2009','2010','2011','2012','2013'],
    datasets: [
        {
            label: '1st Dataset',
            data: [0,0,0,65, 59, 80, 81, 56, 55, 40,60,40,40,30,30,0 ,0, 0],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4
        },
        {
            label: '2nd Dataset',
            data: [0,0,0,28, 48, 40, 19, 86, 27, 90,60,40,40,30,30,0 ,0, 0],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4
        },
        {
          label: '3rd Dataset',
          data: [0,0,0,28, 48, 40, 80, 86, 40, 50,70,60,44,30,30,0 ,0, 0],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          tension: 0.4
      },
      {
        label: '4th Dataset',
        data: [0,0,0,28, 48, 70, 80, 20, 50, 65,30,40,50,30,30,0 ,0, 0],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--pink-500'),
        tension: 0.4
    }
    ]
};
this.options = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
      legend: {
          labels: {
              color: textColor
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: textColorSecondary
          },
          grid: {
              color: surfaceBorder,
              drawBorder: false
          }
      }
  }
};

}
}
