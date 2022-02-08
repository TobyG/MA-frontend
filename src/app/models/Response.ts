import { Defect } from "./Defect";
import { DefectTotal } from "./DefectTotal";
import { Image } from "./Image";

/**
 * general response object from server
 * - images: array of inferred images
 * - numberOfImgs: total inferences performed
 * - numberOfDefects: global number of defects found
 * - totalDefects: global summary of defects found
 * - errors: number of errors in images encountered
 */
export interface Response {
  images: Image[];
  numberOfImgs: number;
  numberOfDefects: number;
  totalDefects: DefectTotal[];
  errors: number;
}
