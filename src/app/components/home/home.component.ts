import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  

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

  constructor() {}

  ngOnInit(): void {}
}
