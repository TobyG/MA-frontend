import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

// import { Upload } from "src/app/models/Upload";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  static readonly BASE_URL = environment.base_url;

  constructor(private readonly http: HttpClient) {}

  // SEND MULTIPLE IMAGES AT ONCE OR ONLY IMAGE BY IMAGE ?
  // HOW TO GET STATISTICS ?
  /**
   * sends post request to server with image
   * @param file set of image to be uploaded
   */
  uploadFile(file: File) {}

  uploadFiles(formData: FormData): Observable<any> {
    console.log("on upload files");
    return this.http.post(`${UploadService.BASE_URL}/detect`, formData);
  }
}
