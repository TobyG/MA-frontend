/**
 * model for welding defect
 * - type: type of defect (i.e. crack, pore)
 * - area: in pixels
 * - height: in pixels
 * - widht: in pixels
 * - m_height: in measurement unit
 * - m_width: in measurement unit
 * - m_area: in measurement unit
 */
export interface Defect {
  type: String;
  area: number;
  height: number;
  width: number;
  m_height: number;
  m_width: number;
  m_area: number;
}
