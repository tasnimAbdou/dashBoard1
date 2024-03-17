import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-rightbar',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './rightbar.component.html',
  styleUrl: './rightbar.component.css'
})
export class RightbarComponent {

  basicData: any;

    basicOptions: any;
    data1: any;
data2:any;
    options1: any;
    options2: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['Q1', 'Q2', 'Q3'],
            datasets: [
                {
                    label: 'Sales',
                    data: [40, 10, 32],
                    backgroundColor: ['rgba(240, 45, 162)', 'rgba(135, 28, 142)', 'rgba(36, 255, 118)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
                    borderWidth: 1
                }
            ]
        };
        this.data1 = {
          labels: ['January', 'February', 'March', 'Apri'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                  borderColor: documentStyle.getPropertyValue('--pink-500'),
                  data: [65, 59, 80, 81]
              }
              
          ]
      };
      this.data2 = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: '2nd data',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                borderColor: documentStyle.getPropertyValue('--green-500'),
                data: [65, 59, 80, 81, 56]
            }
            
        ]
    };
      this.options1 = {
          indexAxis: 'y',
          maintainAspectRatio: false,
          aspectRatio: 1.5,
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
                      color: textColorSecondary,
                      font: {
                          weight: 400
                          
                      }
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
      this.options2 = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 2.5,
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
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
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
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
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
