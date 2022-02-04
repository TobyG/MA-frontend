import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Response } from "src/app/models/Response";

const DELIMITER: string = ";";

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

  /**
   * converts object to CSV and opens download
   * @param data array of data objects
   * @param filename file name
   */
  downloadCSV(): void {
    let data = this.response2.images;
    let filename: string = "csv_download";
    const headerList: string[] = [];
    Object.entries(data[0]).forEach(([key, value]) => headerList.push(key));

    const csvData: string = this.convertToCSV(data, headerList);

    const blob: Blob = new Blob(["\ufeff" + csvData], {
      type: "text/csv;charset=utf-8;",
    });

    const link: HTMLAnchorElement = document.createElement("a");
    const url: string = URL.createObjectURL(blob);
    const isSafariBrowser: boolean =
      navigator.userAgent.indexOf("Safari") !== -1 &&
      navigator.userAgent.indexOf("Chrome") === -1;
    if (isSafariBrowser) {
      // if Safari open in new window to save file with random filename.
      link.setAttribute("target", "_blank");
    }
    link.setAttribute("href", url);
    link.setAttribute("download", filename + ".csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * converts an object to CSV
   */
  convertToCSV(objArray: object, headerList: string[]): string {
    const array: any =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;

    // initialize string
    let str: string = "";

    // add header row
    let row: string = "";
    headerList.forEach((header) => (row += header + DELIMITER));
    // remove last comma
    row = row.slice(0, -1);
    // add newline
    str += row + "\r\n";

    // iterate through data
    for (let i: number = 0; i < array.length; i++) {
      row = "";

      headerList.forEach((header) => {
        if (typeof array[i][header] === "object") {
          row += '"' + JSON.stringify(array[i][header]) + '"' + DELIMITER;
        } else {
          row += '"' + array[i][header] + '"' + DELIMITER;
        }
      });
      row = row.slice(0, -1);
      str += row + "\r\n";
    }

    return str;
  }
}
