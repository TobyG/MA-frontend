import { Defect } from "./Defect";
import { DefectTotal } from "./DefectTotal";

export interface Image {
  defects: Defect[];
  img: String;
  name: String;
  measure_text: number;
  measure_type: String;
  measure_pixels: number;
  totalDefects: DefectTotal[];
}
