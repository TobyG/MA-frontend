import { Defect } from "./Defect";
import { DefectTotal } from "./DefectTotal";
import { Image } from "./Image";

export interface Response {
  images: Image[];
  numberOfImgs: number;
  numberOfDefects: number;
  totalDefects: DefectTotal[];
  errors: number;
}
