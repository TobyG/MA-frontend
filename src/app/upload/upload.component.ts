import { Component, OnInit } from "@angular/core";
import { SnackService } from "../services/snack.service";
import { UploadService } from "../services/upload.service";

@Component({
  selector: "upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
  files: File[] = [];
  mode: string = "";
  hovering: boolean = false;

  constructor(
    public uService: UploadService,
    private snackService: SnackService
  ) {}

  ngOnInit() {}

  toggleHover(event: any) {
    console.log(event);
    this.hovering = event;
  }

  onRemove(index: number) {
    this.files.splice(index, 1);
  }

  onFileSelect(event: any) {
    this.addToUploads(event.srcElement.files);
    (<HTMLInputElement>document.getElementById("fileinput")).value = "";
  }

  onDropFiles(fileList: any) {
    this.addToUploads(fileList);
  }

  addToUploads(fileList: any) {
    console.log("addToUploads()");
    const files = [...fileList];
    this.files = this.files.concat(files);
    console.log(files[0].size);
    this.files = this.files.filter((val) => {
      return val.size < 1000000;
    });
    console.log(this.files.length);
  }

  onUpload() {
    this.mode = "upload";
    let numUploads = 0;

    for (let i = 0; i < this.files.length; i++) {
      // subscribe, then increase numUploads
      this.uService.uploadFile(this.files[i]);

      numUploads = numUploads + 1;
      if (numUploads == this.files.length) {
        let messg = "Successfully uploaded " + numUploads + " files";
        this.snackService.openSnackBar(messg, "Close");
      }
    }
  }
}
