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
  ) { }

  ngOnInit(): void { }

  // taken from https://stackoverflow.com/questions/52722161/download-base64-image-in-angular-5
  convertBase64ToBlobData(base64Data: string, contentType: string = 'image/jpeg', sliceSize = 512) {
    console.log(base64Data);
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  onDownloadImg() {

    const blobData = this.convertBase64ToBlobData("" + this.data.img);
    const blob = new Blob([blobData], { type: "image/jpeg" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "" + this.data.name;
    link.click();
  }
}
