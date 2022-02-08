import { Defect } from "./Defect";
import { DefectTotal } from "./DefectTotal";

/**
 * image summary
 * - defects: array of defect objects
 * - img: file url of image
 * - name: image name
 * - measure_text: number (i.e. 5 or 10)
 * - measure_type: type (i.e. cm, mm)
 * - measure_pixels: width of measurement-line
 * - totalDefects: array of defect summaries
 */
export interface Image {
  defects: Defect[];
  img: String;
  name: String;
  measure_text: number;
  measure_type: String;
  measure_pixels: number;
  totalDefects: DefectTotal[];
}
