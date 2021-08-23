import { Component, OnInit } from "@angular/core";

interface TileData {
  title: String;
  subtitle: String;
  icon: String;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  
  tileData: TileData[] = [
    {title: "Bilder", subtitle: "39", icon: ""},
    {title: "Defekte", subtitle: "14", icon:""},
    {title: "XX", subtitle: "3", icon: ""}
  ]

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
