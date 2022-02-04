import { Component, OnInit } from "@angular/core";
import { Response } from "src/app/models/Response";
import { SnackService } from "../../services/snack.service";
import { UploadService } from "../../services/upload.service";

@Component({
  selector: "upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
  files: File[] = [];
  upload = false;
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
    console.log("on drop");
    this.addToUploads(fileList);
  }

  addToUploads(fileList: any) {
    const files = [...fileList];
    this.files = this.files.concat(files);
    this.files = this.files.filter((val) => {
      return val.size < 2000000;
    });
  }

  onUpload() {
    this.upload = true;

    let formData = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      formData.append("images[]", this.files[i]);
    }
    this.uService.uploadFiles(formData).subscribe(
      (val: Response) => {
        console.log(val);
        this.uService.response = val;
        this.uService.data = true;
        this.upload = false;
      },
      (err: any) => {
        this.snackService.openSnackBar(err, "ok");
        console.log(err);
        this.upload = false;
      }
    );
  }

  onRestart() {
    this.files = [];
  }
}
