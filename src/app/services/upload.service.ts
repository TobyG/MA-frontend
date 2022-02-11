import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Response } from "src/app/models/Response";

const DELIMITER: string = ";";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  static readonly BASE_URL = environment.base_url;

  data = false;
  response2: Response = {
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

  response: Response = {
    "errors": 0,
    "images": [
      {
        "defects": [
          {
            "area": 1420,
            "height": 42,
            "m_area": 0.0089,
            "m_height": 0.105,
            "m_width": 0.0925,
            "type": "pore",
            "width": 37
          },
          {
            "area": 1898,
            "height": 46,
            "m_area": 0.0119,
            "m_height": 0.115,
            "m_width": 0.1275,
            "type": "pore",
            "width": 51
          },
          {
            "area": 1722,
            "height": 45,
            "m_area": 0.0108,
            "m_height": 0.1125,
            "m_width": 0.1075,
            "type": "pore",
            "width": 43
          },
          {
            "area": 1772,
            "height": 47,
            "m_area": 0.0111,
            "m_height": 0.1175,
            "m_width": 0.1125,
            "type": "pore",
            "width": 45
          },
          {
            "area": 1956,
            "height": 51,
            "m_area": 0.0122,
            "m_height": 0.1275,
            "m_width": 0.105,
            "type": "pore",
            "width": 42
          },
          {
            "area": 1225,
            "height": 37,
            "m_area": 0.0077,
            "m_height": 0.0925,
            "m_width": 0.09,
            "type": "pore",
            "width": 36
          },
          {
            "area": 2305,
            "height": 51,
            "m_area": 0.0144,
            "m_height": 0.1275,
            "m_width": 0.13,
            "type": "pore",
            "width": 52
          },
          {
            "area": 2809,
            "height": 56,
            "m_area": 0.0176,
            "m_height": 0.14,
            "m_width": 0.1375,
            "type": "pore",
            "width": 55
          },
          {
            "area": 1407,
            "height": 39,
            "m_area": 0.0088,
            "m_height": 0.0975,
            "m_width": 0.1,
            "type": "pore",
            "width": 40
          },
          {
            "area": 692,
            "height": 25,
            "m_area": 0.0043,
            "m_height": 0.0625,
            "m_width": 0.08,
            "type": "pore",
            "width": 32
          },
          {
            "area": 2391,
            "height": 66,
            "m_area": 0.0149,
            "m_height": 0.165,
            "m_width": 0.12,
            "type": "pore",
            "width": 48
          }
        ],
        "img": "xxxencoded.decode()",
        "measure_pixels": 220,
        "measure_text": 0.55,
        "measure_type": "mm",
        "name": "2.jpeg",
        "totalDefects": [
          {
            "name": "build",
            "value": 0
          },
          {
            "name": "crack",
            "value": 0
          },
          {
            "name": "flash",
            "value": 0
          },
          {
            "name": "pore",
            "value": 11
          },
          {
            "name": "tunnel",
            "value": 0
          }
        ]
      }
    ],
    "numberOfDefects": 11,
    "numberOfImgs": 1,
    "totalDefects": [
      {
        "name": "crack",
        "value": 0
      },
      {
        "name": "flash",
        "value": 0
      },
      {
        "name": "pore",
        "value": 11
      },
      {
        "name": "tunnel",
        "value": 0
      }
    ]
  }


  constructor(private readonly http: HttpClient) { }

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
    let data = this.response.images;
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
