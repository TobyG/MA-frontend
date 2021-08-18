import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  single: any[] = [
    {
      name: "Hole",
      value: 30,
    },
    {
      name: "Crack",
      value: 12,
    },
  ];
  
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: string = "below";

  colorScheme = {
    domain: ["#01205c", "#013089", "#0240b7", "#0250e5", "#3573ea	", "#6796ef	"],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
