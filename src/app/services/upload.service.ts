import { Injectable } from "@angular/core";

// import { Upload } from "src/app/models/Upload";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  constructor() {}

  // SEND MULTIPLE IMAGES AT ONCE OR ONLY IMAGE BY IMAGE ?
  // HOW TO GET STATISTICS ?
/**
 * sends post request to server with image  
 * @param file set of image to be uploaded
 */
  uploadFile(file: File) {}
}
