import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Image } from "src/app/models/Image";

@Component({
  selector: "app-img-viewer",
  templateUrl: "./img-viewer.component.html",
  styleUrls: ["./img-viewer.component.scss"],
})
export class ImgViewerComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ImgViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {}

  ngOnInit(): void {}
}
