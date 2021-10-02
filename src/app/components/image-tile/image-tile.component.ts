import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DefectTotal } from "src/app/models/DefectTotal";
import { Image } from "src/app/models/Image";
import { ImgViewerComponent } from "../img-viewer/img-viewer.component";

@Component({
  selector: "image-tile",
  templateUrl: "./image-tile.component.html",
  styleUrls: ["./image-tile.component.scss"],
})
export class ImageTileComponent implements OnInit {
  @Input() img: Image = {
    defects: [],
    img: "",
    name: "",
    measure_text: 0,
    measure_type: "",
    measure_pixels: 0,
    totalDefects: [
      { name: "hole", value: 3 },
      { name: "crack", value: 2 },
    ],
  };
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onViewImg() {
    const dialogRef = this.dialog.open(ImgViewerComponent, {
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getSource(d: String): String {
    if (d == "hole") {
      return "assets/hole.svg";
    }
    if (d == "crack") {
      return "assets/crack.svg";
    }
    return "";
  }
}
