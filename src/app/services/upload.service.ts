import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Response } from "src/app/models/Response";

// import { Upload } from "src/app/models/Upload";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  static readonly BASE_URL = environment.base_url;

  response2: Response = {
    images: [],
    numberOfImgs: 0,
    numberOfDefects: 0,
    totalDefects: [],
    errors: 0,
  };

  data = false;
  response: Response = {
    images: [
      {
        defects: [
          {
            type: "hole",
            area: 6425,
            height: 20,
            width: 49,
            m_height: 6.8288282,
            m_width: 18.29299292,
            m_area: 20,
          },
          {
            type: "hole",
            area: 1074,
            height: 20,
            width: 49,
            m_height: 6.8288282,
            m_width: 18.29299292,
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
    return this.http.post(`${UploadService.BASE_URL}detect`, formData);
  }

  clearData(): void {
    this.data = false;
  }
}
