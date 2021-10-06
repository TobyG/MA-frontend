import { Component, OnInit } from "@angular/core";
import { Response } from "src/app/models/Response";

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
  myBase64 =
    "b'/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYG'";

  response: Response = {
    images: [
      {
        defects: [
          {
            type: "hole",
            area: 6425,
            height: 20,
            width: 49,
            m_height: 6,
            m_width: 18,
            m_area: 20,
          },
          {
            type: "hole",
            area: 1074,
            height: 20,
            width: 49,
            m_height: 6,
            m_width: 18,
            m_area: 20,
          },
        ],
        img: "",
        name: "95_phalu_008_004",
        totalDefects: [
          { name: "hole", value: 2 },
          { name: "crack", value: 0 },
        ],
        measure_text: 3,
        measure_type: "mm",
        measure_pixels: 30,
      },
    ],
    numberOfDefects: 16,
    numberOfImgs: 3,
    totalDefects: [
      { name: "Hole", value: 12 },
      { name: "Crack", value: 3 },
    ],
    errors: 0,
  };

  tileData: TileData[] = [
    { title: "Bilder", subtitle: "39", icon: "" },
    { title: "Defekte", subtitle: "14", icon: "" },
    { title: "XX", subtitle: "3", icon: "" },
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

  ngOnInit(): void {
    this.response.images = [this.response.images[0], this.response.images[0]];
  }
}
