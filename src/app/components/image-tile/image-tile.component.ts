import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ImgViewerComponent } from "../img-viewer/img-viewer.component";

@Component({
  selector: "image-tile",
  templateUrl: "./image-tile.component.html",
  styleUrls: ["./image-tile.component.scss"],
})
export class ImageTileComponent implements OnInit {
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
}
